/**
 * 사용자 관점 통합 테스트 (MSW + React Testing Library)
 *
 * 실제 브라우저처럼 컴포넌트를 렌더링하고 사용자 인터랙션을 시뮬레이션한다.
 * 네트워크 계층은 MSW로 가로채 실제 서버 없이 E2E에 가까운 흐름을 검증한다.
 *
 * 시나리오:
 *   1. 카드 목록 페이지 - 로딩 → 목록 표시 → 빈 목록 → 에러/재시도
 *   2. 카드 삭제 플로우
 *   3. 카드 등록 폼 - 단계별 진행 → 서버 성공 → 완료 페이지
 *   4. 카드 등록 폼 - 서버 에러 시 에러 메시지 표시
 */

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { UserEvent } from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/node';
import { db } from '../mocks/db';
import { CardList } from '../page/CardList';
import { Card } from '../page/Card';
import { RegistrationComplete } from '../page/RegistrationComplete';

vi.stubGlobal('confirm', () => true);

const BASE_URL = 'https://api.example.com';

// CardList 내부 useCardList의 1초 인위 지연을 제거해 테스트 속도를 높인다
vi.mock('../hooks/useCardsList', async () => {
  const { useEffect, useState } = await import('react');
  const { getCards, deleteCard } = await import('../api/cardsAPI');

  function useCardList() {
    const [cardListState, setCardListState] = useState<
      import('../types/asyncState').AsyncState<import('../types/card').Card[]>
    >({ status: 'idle' });

    const fetchCards = async () => {
      try {
        setCardListState({ status: 'loading' });
        const responseData = await getCards();
        setCardListState({ status: 'success', responseData });
      } catch (err) {
        if (err instanceof Error) {
          setCardListState({ status: 'error', message: err.message });
        } else {
          setCardListState({ status: 'error', message: 'Unknown error' });
        }
      }
    };

    useEffect(() => {
      fetchCards();
    }, []);

    const handleDelete = async (id: string) => {
      if (!window.confirm('삭제하시겠습니까?')) return;
      await deleteCard(id);
      await fetchCards();
    };

    return { cardListState, fetchCards, handleDelete };
  }

  return { useCardList };
});

// ─────────────────────────────────────────────
// 헬퍼
// ─────────────────────────────────────────────
function renderWithRouter(initialPath: string) {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/react-payments" element={<CardList />} />
        <Route path="/react-payments/add" element={<Card />} />
        <Route path="/react-payments/complete" element={<RegistrationComplete />} />
      </Routes>
    </MemoryRouter>,
  );
}

// 드롭다운 버튼: 선택 전에는 "카드사를 선택해주세요" placeholder 텍스트를 포함한다
function getDropdownButton() {
  return screen.getByText('카드사를 선택해주세요').closest('button')!;
}

// 카드 등록 폼 전체 단계를 사용자 인터랙션으로 채운다
async function fillCardForm(user: UserEvent) {
  // Step 0: 카드 번호 (Visa 16자리)
  const inputs = () => screen.getAllByRole('textbox');
  await user.type(inputs()[0], '4111');
  await user.type(inputs()[1], '1111');
  await user.type(inputs()[2], '1111');
  await user.type(inputs()[3], '1111');

  // Step 1: 카드사 선택
  await waitFor(() => expect(getDropdownButton()).toBeInTheDocument());
  await user.click(getDropdownButton());
  await waitFor(() => expect(screen.getByText('신한카드')).toBeInTheDocument());
  await user.click(screen.getByText('신한카드'));

  // Step 2: 유효기간
  await waitFor(() => expect(screen.getByText('카드 유효기간을 입력해 주세요')).toBeInTheDocument());
  // 유효기간 섹션의 두 input: 화면에 추가된 textbox 중 마지막 두 개
  const expirySection = screen.getByText('카드 유효기간을 입력해 주세요').closest('div')!;
  const expiryInputs = expirySection.querySelectorAll('input');
  await user.type(expiryInputs[0], '12');
  await user.type(expiryInputs[1], '26');

  // Step 3: CVC
  await waitFor(() => expect(screen.getByText('CVC 번호를 입력해 주세요')).toBeInTheDocument());
  const cvcInput = screen.getByLabelText('CVC');
  await user.type(cvcInput, '123');

  // Step 4: 비밀번호 (label: "비밀번호 앞 2자리", type="password")
  await waitFor(() => expect(screen.getByText('비밀번호를 입력해 주세요')).toBeInTheDocument());
  const pwInput = screen.getByLabelText('비밀번호 앞 2자리');
  await user.type(pwInput, '12');
}

// ─────────────────────────────────────────────
// 카드 목록 페이지
// ─────────────────────────────────────────────
describe('CardList 페이지', () => {
  beforeEach(() => {
    db.cards = [];
  });

  it('페이지 진입 시 "보유 카드" 제목이 표시된다', async () => {
    server.use(http.get(`${BASE_URL}/cards`, () => HttpResponse.json([], { status: 200 })));

    renderWithRouter('/react-payments');

    expect(screen.getByText('보유 카드')).toBeInTheDocument();
  });

  it('카드가 없을 때 빈 목록 안내 문구가 표시된다', async () => {
    server.use(http.get(`${BASE_URL}/cards`, () => HttpResponse.json([], { status: 200 })));

    renderWithRouter('/react-payments');

    await waitFor(() => {
      expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
    });
  });

  it('카드가 있을 때 카드 정보가 화면에 표시된다', async () => {
    server.use(
      http.get(`${BASE_URL}/cards`, () =>
        HttpResponse.json(
          [{ id: 'c1', number: '411111******1111', expirationDate: '12/26', cvc: '***', issuerCode: '41' }],
          { status: 200 },
        ),
      ),
    );

    renderWithRouter('/react-payments');

    await waitFor(() => {
      expect(screen.getByText('신한카드')).toBeInTheDocument();
    });
    expect(screen.getByText('유효기간 12/26')).toBeInTheDocument();
    // 번호는 4자리마다 공백으로 포맷: '411111******1111' → '4111 11** **** 1111'
    expect(screen.getByText('4111 11** **** 1111')).toBeInTheDocument();
  });

  it('서버 오류 시 에러 메시지와 다시 시도 버튼이 표시된다', async () => {
    server.use(
      http.get(`${BASE_URL}/cards`, () => HttpResponse.json({ message: 'fail' }, { status: 500 })),
    );

    renderWithRouter('/react-payments');

    await waitFor(() => {
      expect(screen.getByText('카드 목록을 불러올 수 없어요')).toBeInTheDocument();
    });
    expect(screen.getByRole('button', { name: '다시 시도' })).toBeInTheDocument();
  });

  it('다시 시도 버튼 클릭 시 목록을 재요청해 빈 목록을 보여준다', async () => {
    let callCount = 0;
    server.use(
      http.get(`${BASE_URL}/cards`, () => {
        callCount += 1;
        if (callCount === 1) return HttpResponse.json({ message: 'fail' }, { status: 500 });
        return HttpResponse.json([], { status: 200 });
      }),
    );

    renderWithRouter('/react-payments');

    await waitFor(() => {
      expect(screen.getByRole('button', { name: '다시 시도' })).toBeInTheDocument();
    });

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: '다시 시도' }));

    await waitFor(() => {
      expect(screen.getByText('등록된 카드가 없습니다')).toBeInTheDocument();
    });
  });
});

// ─────────────────────────────────────────────
// 카드 삭제 플로우
// ─────────────────────────────────────────────
describe('카드 삭제 플로우', () => {
  beforeEach(() => {
    db.cards = [];
  });

  it('✕ 버튼 클릭 → confirm 승인 → 카드가 목록에서 사라진다', async () => {
    db.cards.push({ id: 'to-delete', number: '4111111111111111', expirationDate: '12/26', cvc: '123', issuerCode: '41' });

    server.use(
      http.get(`${BASE_URL}/cards`, () =>
        HttpResponse.json(
          db.cards.map((c) => ({ ...c, number: c.number.substring(0, 6) + '******' + c.number.substring(12) })),
          { status: 200 },
        ),
      ),
      http.delete(`${BASE_URL}/cards/:id`, ({ params }) => {
        db.cards = db.cards.filter((c) => c.id !== params.id);
        return new HttpResponse(null, { status: 204 });
      }),
    );

    renderWithRouter('/react-payments');

    await waitFor(() => {
      expect(screen.getByText('신한카드')).toBeInTheDocument();
    });

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: '✕' }));

    await waitFor(() => {
      expect(screen.queryByText('신한카드')).not.toBeInTheDocument();
    });
  });

  it('confirm 취소 시 카드가 목록에 남아있다', async () => {
    vi.stubGlobal('confirm', () => false);

    server.use(
      http.get(`${BASE_URL}/cards`, () =>
        HttpResponse.json(
          [{ id: 'stay', number: '411111******1111', expirationDate: '12/26', cvc: '***', issuerCode: '41' }],
          { status: 200 },
        ),
      ),
    );

    renderWithRouter('/react-payments');

    await waitFor(() => {
      expect(screen.getByText('신한카드')).toBeInTheDocument();
    });

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: '✕' }));

    expect(screen.getByText('신한카드')).toBeInTheDocument();

    vi.stubGlobal('confirm', () => true);
  });
});

// ─────────────────────────────────────────────
// 카드 등록 폼 - 단계별 진행
// ─────────────────────────────────────────────
describe('카드 등록 폼 - 단계별 진행', () => {
  it('카드 번호 4자리씩 모두 입력하면 카드사 선택 섹션이 나타난다', async () => {
    renderWithRouter('/react-payments/add');

    const user = userEvent.setup();
    const inputs = () => screen.getAllByRole('textbox');
    await user.type(inputs()[0], '4111');
    await user.type(inputs()[1], '1111');
    await user.type(inputs()[2], '1111');
    await user.type(inputs()[3], '1111');

    await waitFor(() => {
      expect(screen.getByText('카드사를 선택해 주세요')).toBeInTheDocument();
    });
  });

  it('카드사 선택 후 유효기간 섹션이 나타난다', async () => {
    renderWithRouter('/react-payments/add');

    const user = userEvent.setup();
    const inputs = () => screen.getAllByRole('textbox');
    await user.type(inputs()[0], '4111');
    await user.type(inputs()[1], '1111');
    await user.type(inputs()[2], '1111');
    await user.type(inputs()[3], '1111');

    await waitFor(() => expect(getDropdownButton()).toBeInTheDocument());
    await user.click(getDropdownButton());
    await waitFor(() => screen.getByText('신한카드'));
    await user.click(screen.getByText('신한카드'));

    await waitFor(() => {
      expect(screen.getByText('카드 유효기간을 입력해 주세요')).toBeInTheDocument();
    });
  });
});

// ─────────────────────────────────────────────
// 카드 등록 폼 - 서버 성공 시 완료 페이지 이동
// ─────────────────────────────────────────────
describe('카드 등록 폼 - 서버 성공', () => {
  it('전체 폼 작성 후 제출하면 완료 페이지로 이동한다', async () => {
    server.use(
      http.post(`${BASE_URL}/cards`, async () =>
        HttpResponse.json({ id: 'new-card-id' }, { status: 201 }),
      ),
    );

    renderWithRouter('/react-payments/add');

    const user = userEvent.setup();
    await fillCardForm(user);

    await user.click(screen.getByRole('button', { name: '확인' }));

    await waitFor(() => {
      expect(screen.getByText(/등록되었어요/)).toBeInTheDocument();
    });
    expect(screen.getByText(/4111로 시작하는/)).toBeInTheDocument();
  });
});

// ─────────────────────────────────────────────
// 카드 등록 폼 - 서버 에러 시 에러 메시지 표시
// ─────────────────────────────────────────────
describe('카드 등록 폼 - 서버 에러', () => {
  it('INVALID_CARD_NUMBER 에러 시 카드 번호 필드 아래 에러 메시지가 표시된다', async () => {
    server.use(
      http.post(`${BASE_URL}/cards`, () =>
        HttpResponse.json(
          { code: 'INVALID_CARD_NUMBER', message: '유효하지 않은 카드 번호입니다.' },
          { status: 400 },
        ),
      ),
    );

    renderWithRouter('/react-payments/add');

    const user = userEvent.setup();
    await fillCardForm(user);
    await user.click(screen.getByRole('button', { name: '확인' }));

    await waitFor(() => {
      expect(screen.getByText('유효하지 않은 카드 번호입니다.')).toBeInTheDocument();
    });
  });

  it('INVALID_CVC 에러 시 CVC 필드 아래 에러 메시지가 표시된다', async () => {
    server.use(
      http.post(`${BASE_URL}/cards`, () =>
        HttpResponse.json(
          { code: 'INVALID_CVC', message: '유효하지 않은 CVC입니다.' },
          { status: 400 },
        ),
      ),
    );

    renderWithRouter('/react-payments/add');

    const user = userEvent.setup();
    await fillCardForm(user);
    await user.click(screen.getByRole('button', { name: '확인' }));

    await waitFor(() => {
      expect(screen.getByText('유효하지 않은 CVC입니다.')).toBeInTheDocument();
    });
  });
});
