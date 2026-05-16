import {HttpResponse, http} from 'msw';
import {MemoryRouter} from 'react-router-dom';
import {afterEach, describe, expect, test, vi} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import {addMockCard} from '../mocks/cardStore';
import {server} from '../mocks/server';

const renderApp = (route: string) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  );
};

const fillValidCardForm = async (cvc = '123') => {
  const user = userEvent.setup();

  const numberInputs = screen.getAllByPlaceholderText('1234');
  await user.type(numberInputs[0], '5511');
  await user.type(numberInputs[1], '1234');
  await user.type(numberInputs[2], '5678');
  await user.type(numberInputs[3], '9012');

  await user.selectOptions(await screen.findByLabelText('카드사'), 'bc');
  await user.type(await screen.findByLabelText('유효기간'), '12');
  await user.type(screen.getByPlaceholderText('YY'), '28');
  await user.type(await screen.findByLabelText('CVC'), cvc);
  await user.type(await screen.findByLabelText('비밀번호 앞 2자리'), '12');

  return user;
};

const addBcCard = () => {
  return addMockCard({
    number: '5511123456789012',
    expirationDate: '12/28',
    cvc: '123',
    issuerCode: '31',
  });
};

const addShinhanCard = () => {
  return addMockCard({
    number: '4111111111111111',
    expirationDate: '09/27',
    cvc: '123',
    issuerCode: '41',
  });
};

describe('카드 결제 흐름', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('카드 목록이 비어 있으면 empty 화면을 보여준다', async () => {
    renderApp('/cards');

    expect(await screen.findByRole('heading', {name: '보유 카드'})).toBeInTheDocument();
    expect(await screen.findByText('등록된 카드가 없습니다')).toBeInTheDocument();
    expect(screen.getByText('아래 버튼을 눌러 첫 카드를 등록해보세요')).toBeInTheDocument();
  });

  test('루트로 진입하면 카드 목록 페이지를 보여준다', async () => {
    renderApp('/');

    expect(await screen.findByRole('heading', {name: '보유 카드'})).toBeInTheDocument();
  });

  test('카드 목록을 불러오는 동안 loading 화면을 보여준다', async () => {
    server.use(http.get('/cards', () => new Promise(() => {})));

    renderApp('/cards');

    expect(await screen.findByLabelText('카드 목록을 불러오는 중')).toBeInTheDocument();
  });

  test('empty 화면에서 카드 추가하기를 누르면 카드 등록 화면으로 이동한다', async () => {
    renderApp('/cards');

    const user = userEvent.setup();
    await user.click(await screen.findByRole('button', {name: '카드 추가하기'}));

    expect(await screen.findByText('결제할 카드 번호를 입력해 주세요')).toBeInTheDocument();
  });

  test('등록 화면은 입력이 완료될수록 다음 입력 필드를 보여준다', async () => {
    renderApp('/register');

    const user = userEvent.setup();
    expect(screen.getByText('결제할 카드 번호를 입력해 주세요')).toBeInTheDocument();
    expect(screen.queryByLabelText('카드사')).not.toBeInTheDocument();

    const numberInputs = screen.getAllByPlaceholderText('1234');
    await user.type(numberInputs[0], '5511');
    await user.type(numberInputs[1], '1234');
    await user.type(numberInputs[2], '5678');
    await user.type(numberInputs[3], '9012');
    expect(await screen.findByLabelText('카드사')).toBeInTheDocument();

    await user.selectOptions(screen.getByLabelText('카드사'), 'bc');
    expect(await screen.findByLabelText('유효기간')).toBeInTheDocument();

    await user.type(screen.getByLabelText('유효기간'), '12');
    await user.type(screen.getByPlaceholderText('YY'), '28');
    expect(await screen.findByLabelText('CVC')).toBeInTheDocument();

    await user.type(screen.getByLabelText('CVC'), '123');
    expect(await screen.findByLabelText('비밀번호 앞 2자리')).toBeInTheDocument();

    expect(screen.queryByRole('button', {name: '확인'})).not.toBeInTheDocument();
    await user.type(screen.getByLabelText('비밀번호 앞 2자리'), '12');
    expect(await screen.findByRole('button', {name: '확인'})).toBeInTheDocument();
  });

  test('카드 등록 성공 시 목록 페이지로 이동해 등록한 카드를 보여준다', async () => {
    renderApp('/register');

    const user = await fillValidCardForm();
    await user.click(screen.getByRole('button', {name: '확인'}));

    expect(await screen.findByText('보유 카드 (1)')).toBeInTheDocument();
    expect(screen.getByText('BC카드')).toBeInTheDocument();
    expect(screen.getByText('551112******9012')).toBeInTheDocument();
  });

  test('카드 등록 중에는 확인 버튼이 등록 중 상태로 바뀐다', async () => {
    server.use(http.post('/cards', () => new Promise(() => {})));
    renderApp('/register');

    const user = await fillValidCardForm();
    await user.click(screen.getByRole('button', {name: '확인'}));

    expect(await screen.findByRole('button', {name: '등록 중...'})).toBeDisabled();
  });

  test('서버가 카드 번호 에러를 반환하면 카드 번호 필드 아래에 메시지를 보여주고 포커스를 이동한다', async () => {
    renderApp('/register');

    const user = userEvent.setup();
    const numberInputs = screen.getAllByPlaceholderText('1234');
    await user.type(numberInputs[0], '9999');
    await user.type(numberInputs[1], '1234');
    await user.type(numberInputs[2], '5678');
    await user.type(numberInputs[3], '9012');
    const cardNumberInput = screen.getByLabelText('카드 번호');

    await user.selectOptions(await screen.findByLabelText('카드사'), 'lotte');
    await user.type(await screen.findByLabelText('유효기간'), '12');
    await user.type(screen.getByPlaceholderText('YY'), '28');
    await user.type(await screen.findByLabelText('CVC'), '123');
    await user.type(await screen.findByLabelText('비밀번호 앞 2자리'), '12');
    await user.click(screen.getByRole('button', {name: '확인'}));

    expect(await screen.findByText('유효하지 않은 카드 번호입니다.')).toBeInTheDocument();
    await waitFor(() => expect(cardNumberInput).toHaveFocus());
  });

  test('서버가 CVC 에러를 반환하면 CVC 필드 아래에 메시지를 보여주고 포커스를 이동한다', async () => {
    renderApp('/register');

    const user = await fillValidCardForm('000');
    const cvcInput = screen.getByLabelText('CVC');
    await user.click(screen.getByRole('button', {name: '확인'}));

    expect(await screen.findByText('유효하지 않은 CVC입니다.')).toBeInTheDocument();
    await waitFor(() => expect(cvcInput).toHaveFocus());
  });

  test('서버가 만료일 에러를 반환하면 유효기간 필드 아래에 메시지를 보여주고 포커스를 이동한다', async () => {
    server.use(
      http.post('/cards', () =>
        HttpResponse.json(
          {
            code: 'INVALID_EXPIRATION_DATE',
            message: '유효하지 않은 만료일입니다.',
          },
          {status: 400}
        )
      )
    );
    renderApp('/register');

    const user = await fillValidCardForm();
    const expiryInput = screen.getByLabelText('유효기간');
    await user.click(screen.getByRole('button', {name: '확인'}));

    expect(await screen.findByText('유효하지 않은 만료일입니다.')).toBeInTheDocument();
    await waitFor(() => expect(expiryInput).toHaveFocus());
  });

  test('등록된 카드가 여러 장이면 개수와 카드 정보를 함께 보여준다', async () => {
    addBcCard();
    addShinhanCard();
    renderApp('/cards');

    expect(await screen.findByRole('heading', {name: '보유 카드 (2)'})).toBeInTheDocument();
    expect(screen.getByText('BC카드')).toBeInTheDocument();
    expect(screen.getByText('신한카드')).toBeInTheDocument();
    expect(screen.getByText('551112******9012')).toBeInTheDocument();
    expect(screen.getByText('411111******1111')).toBeInTheDocument();
    expect(screen.getAllByRole('button', {name: /삭제/})).toHaveLength(2);
  });

  test('카드 삭제를 취소하면 DELETE 요청을 보내지 않고 목록을 유지한다', async () => {
    let deleteRequestCount = 0;
    addBcCard();
    server.use(
      http.delete('/cards/:id', () => {
        deleteRequestCount += 1;
        return new HttpResponse(null, {status: 204});
      })
    );
    vi.spyOn(window, 'confirm').mockReturnValue(false);
    renderApp('/cards');

    const user = userEvent.setup();
    await user.click(await screen.findByRole('button', {name: 'BC카드 삭제'}));

    expect(deleteRequestCount).toBe(0);
    expect(screen.getByText('BC카드')).toBeInTheDocument();
  });

  test('카드 삭제를 확인하면 선택한 카드만 목록에서 사라진다', async () => {
    addBcCard();
    addShinhanCard();
    vi.spyOn(window, 'confirm').mockReturnValue(true);
    renderApp('/cards');

    const user = userEvent.setup();
    await user.click(await screen.findByRole('button', {name: 'BC카드 삭제'}));

    await waitFor(() => expect(screen.queryByText('BC카드')).not.toBeInTheDocument());
    expect(screen.getByText('신한카드')).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: '보유 카드 (1)'})).toBeInTheDocument();
  });

  test('카드 목록 조회 실패 시 에러 화면과 재시도 버튼을 보여준다', async () => {
    server.use(http.get('/cards', () => HttpResponse.json({message: 'error'}, {status: 500})));
    renderApp('/cards');

    expect(await screen.findByText('카드 목록을 불러오지 못했습니다.')).toBeInTheDocument();
    expect(screen.getByText('잠시 후 다시 시도해 주세요.')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: '다시 시도'})).toBeInTheDocument();
  });

  test('카드 목록 조회 실패 후 다시 시도하면 목록을 다시 보여준다', async () => {
    let getRequestCount = 0;
    server.use(
      http.get('/cards', () => {
        getRequestCount += 1;

        if (getRequestCount === 1) return HttpResponse.json({message: 'error'}, {status: 500});

        return HttpResponse.json([
          {
            id: '1',
            issuerCode: '31',
            number: '551112******9012',
            expirationDate: '12/28',
          },
        ]);
      })
    );
    renderApp('/cards');

    const user = userEvent.setup();
    await user.click(await screen.findByRole('button', {name: '다시 시도'}));

    expect(await screen.findByText('BC카드')).toBeInTheDocument();
    expect(screen.getByText('551112******9012')).toBeInTheDocument();
  });
});
