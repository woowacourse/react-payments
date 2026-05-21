import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { server } from '../../mocks/server';
import AddCardPage from '../AddCardPage';
import { MemoryRouter, Route, Routes } from 'react-router';
import { postCardScenarios, getCardsScenarios } from '../../mocks/scenarios/cards';
import { ROUTES } from '../../constants';
import AddCardCompletePage from '../AddCardCompletePage';
import CardListPage from '../CardListPage';
import type { SCardList } from '../../mocks/datas/cards.type';

const fillForm = async () => {
  // 1. 카드 번호 입력 (step 0)
  const numberInputs = await screen.findAllByPlaceholderText('1234');
  fireEvent.change(numberInputs[0], { target: { value: '4444' } });
  fireEvent.change(numberInputs[1], { target: { value: '3333' } });
  fireEvent.change(numberInputs[2], { target: { value: '2222' } });
  fireEvent.change(numberInputs[3], { target: { value: '1111' } });

  // 2. 카드사 선택 (step 1)
  const combobox = await screen.findByRole('combobox');
  fireEvent.change(combobox, { target: { value: '국민카드' } });

  // 3. 유효기간 입력 (step 2)
  const monthInput = await screen.findByPlaceholderText('MM');
  const yearInput = await screen.findByPlaceholderText('YY');
  fireEvent.change(monthInput, { target: { value: '12' } });
  fireEvent.change(yearInput, { target: { value: '31' } });

  // 4. CVC 입력 (step 3)
  const cvcInput = await screen.findByPlaceholderText('123');
  fireEvent.change(cvcInput, { target: { value: '123' } });

  // 5. 비밀번호 입력 (step 4)
  const passwordInput = await screen.findByPlaceholderText('**');
  fireEvent.change(passwordInput, { target: { value: '12' } });
};

describe('카드 추가 페이지 통합 테스트', () => {
  it('6. invalid하게 채워진 form인 경우 버튼이 노출되지 않거나 disabled 된다.', async () => {
    // given
    render(
      <MemoryRouter>
        <AddCardPage />
      </MemoryRouter>,
    );

    // when
    const numberInputs = screen.getAllByPlaceholderText('1234');
    fireEvent.change(numberInputs[0], { target: { value: '4444' } });

    // then
    expect(screen.queryByRole('button', { name: '확인' })).not.toBeInTheDocument();
  });

  it('7. valid하게 채워진 form에서 제출 시 서버 에러가 나면 해당 요소에 에러 표시가 된다.', async () => {
    // given
    server.use(postCardScenarios.validationError('INVALID_CARD_NUMBER'));
    render(
      <MemoryRouter>
        <AddCardPage />
      </MemoryRouter>,
    );

    await fillForm();

    // when
    const submitButton = await screen.findByRole('button', { name: '확인' });
    fireEvent.click(submitButton);

    // then
    expect(submitButton).toBeDisabled();

    // then
    await waitFor(() => {
      expect(screen.getByText('유효하지 않은 입력입니다.')).toBeInTheDocument();
    });
  });

  it('8. valid하게 채워진 form에서 제출 성공 시 완료 페이지로 이동하고 정보가 연동된다.', async () => {
    // given
    server.use(postCardScenarios.success);
    render(
      <MemoryRouter initialEntries={[ROUTES.ADD_CARD]}>
        <Routes>
          <Route path={ROUTES.ADD_CARD} element={<AddCardPage />} />
          <Route path={ROUTES.ADD_CARD_COMPLETE} element={<AddCardCompletePage />} />
        </Routes>
      </MemoryRouter>,
    );

    await fillForm();

    // when
    const submitButton = await screen.findByRole('button', { name: '확인' });
    fireEvent.click(submitButton);

    // then
    await waitFor(() => {
      expect(screen.getByText(/등록되었어요/)).toBeInTheDocument();
    });
    expect(screen.getByText(/4444/)).toBeInTheDocument();
    expect(screen.getByText(/국민카드/)).toBeInTheDocument();
  });

  it('10. 전체 등록 흐름 완료 후 목록 페이지에서 등록된 카드가 확인된다.', async () => {
    // given
    const registeredCard: SCardList[number] = {
      id: 'unique-id',
      issuerCode: '11', // 국민카드
      number: '444433******1111',
      expirationDate: '12/31',
    };

    server.use(getCardsScenarios.empty);

    render(
      <MemoryRouter initialEntries={[ROUTES.ADD_CARD]}>
        <Routes>
          <Route path={ROUTES.ADD_CARD} element={<AddCardPage />} />
          <Route path={ROUTES.ADD_CARD_COMPLETE} element={<AddCardCompletePage />} />
          <Route path={ROUTES.CARD_LIST} element={<CardListPage />} />
        </Routes>
      </MemoryRouter>,
    );

    await fillForm();

    server.use(postCardScenarios.success);
    fireEvent.click(await screen.findByRole('button', { name: '확인' }));

    await waitFor(() => expect(screen.getByText(/등록되었어요/)).toBeInTheDocument());

    // when
    server.use(getCardsScenarios.success([registeredCard]));
    fireEvent.click(screen.getByRole('button', { name: '확인' }));

    // then
    await waitFor(() => {
      expect(screen.getByText(/4444/)).toBeInTheDocument();
      expect(screen.getByText('보유 카드 (1)')).toBeInTheDocument();
    });
  });
});
