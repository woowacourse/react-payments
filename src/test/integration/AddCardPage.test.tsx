import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { http, HttpResponse } from 'msw';
import { server } from '../setup';
import AddCardPage from '../../pages/AddCardPage';
import { API_ENDPOINTS } from '../../api/cards';
import AddCardCompletePage from '../../pages/AddCardCompletePage';
import { ROUTES } from '../../routes';

const renderAddCardPage = () => {
  const router = createMemoryRouter(
    [
      { path: ROUTES.addCard, element: <AddCardPage /> },
      { path: ROUTES.addCardComplete, element: <AddCardCompletePage /> },
    ],
    { initialEntries: [ROUTES.addCard] },
  );
  render(<RouterProvider router={router} />);
};

const VALID_CARD_NUMBER = ['5511', '1234', '5678', '9012'].join('');
const INVALID_CARD_NUMBER = ['9999', '1234', '5678', '9012'].join('');

const fillCardForm = async ({
  cardNumber = VALID_CARD_NUMBER,
  cardCompany = 'BC카드',
  expirationMonth = '12',
  expirationYear = '28',
  cvc = '123',
  password = '12',
} = {}) => {
  const user = userEvent.setup();

  const cardNumberInputs = await screen.findAllByPlaceholderText('1234');
  await user.type(cardNumberInputs[0], cardNumber.slice(0, 4));
  await user.type(cardNumberInputs[1], cardNumber.slice(4, 8));
  await user.type(cardNumberInputs[2], cardNumber.slice(8, 12));
  await user.type(cardNumberInputs[3], cardNumber.slice(12, 16));
  await user.tab();

  const select = await screen.findByRole('combobox');
  await user.selectOptions(select, cardCompany);
  await user.tab();

  const periodInputs = await screen.findAllByPlaceholderText(/MM|YY/);
  await user.type(periodInputs[0], expirationMonth);
  await user.type(periodInputs[1], expirationYear);
  await user.tab();

  const cvcInput = await screen.findByPlaceholderText('123');
  await user.type(cvcInput, cvc);
  await user.tab();

  const passwordInput = await screen.findByPlaceholderText('••');
  await user.type(passwordInput, password);
  await user.tab();
};

describe('AddCardPage', () => {
  it('정상 카드 정보 입력 후 submit 시 완료 페이지로 이동합니다', async () => {
    server.use(http.post(API_ENDPOINTS.cards, () => HttpResponse.json({ id: 'new-id' }, { status: 201 })));

    renderAddCardPage();
    await fillCardForm();

    const submitButton = await screen.findByRole('button', { name: '확인' });
    await userEvent.click(submitButton);

    expect(await screen.findByText(/로 시작하는/)).toBeInTheDocument();
  });

  it('유효하지 않은 카드번호 입력 시 에러 메시지가 표시됩니다', async () => {
    server.use(
      http.post(API_ENDPOINTS.cards, () =>
        HttpResponse.json({ code: 'INVALID_CARD_NUMBER', message: '유효하지 않은 카드 번호입니다.' }, { status: 400 }),
      ),
    );

    renderAddCardPage();
    await fillCardForm({ cardNumber: INVALID_CARD_NUMBER });

    const submitButton = await screen.findByRole('button', { name: '확인' });
    await userEvent.click(submitButton);

    expect(await screen.findByText('유효하지 않은 카드 번호입니다.')).toBeInTheDocument();
  });

  it('CVC 000 입력 시 에러 메시지가 표시됩니다', async () => {
    server.use(
      http.post(API_ENDPOINTS.cards, () =>
        HttpResponse.json({ code: 'INVALID_CVC', message: '유효하지 않은 CVC입니다.' }, { status: 400 }),
      ),
    );

    renderAddCardPage();
    await fillCardForm({ cvc: '000' });

    const submitButton = await screen.findByRole('button', { name: '확인' });
    await userEvent.click(submitButton);

    expect(await screen.findByText('유효하지 않은 CVC입니다.')).toBeInTheDocument();
  });

  it('지원하지 않는 카드사 에러 시 alert가 표시됩니다', async () => {
    server.use(
      http.post(API_ENDPOINTS.cards, () =>
        HttpResponse.json({ code: 'INVALID_ISSUER_CODE', message: '지원하지 않는 카드사입니다.' }, { status: 400 }),
      ),
    );

    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    renderAddCardPage();
    await fillCardForm();

    const submitButton = await screen.findByRole('button', { name: '확인' });
    await userEvent.click(submitButton);

    expect(alertMock).toHaveBeenCalledWith('카드 등록에 실패했습니다. 다시 시도해주세요.');
    alertMock.mockRestore();
  });

  it('서버에서 유효하지 않은 만료일 에러 시 에러 메시지가 표시됩니다', async () => {
    server.use(
      http.post(API_ENDPOINTS.cards, () =>
        HttpResponse.json({ code: 'INVALID_EXPIRATION_DATE', message: '유효하지 않은 만료일입니다.' }, { status: 400 }),
      ),
    );

    renderAddCardPage();
    // 클라이언트 검증은 통과하지만 서버가 INVALID_EXPIRATION_DATE를 반환하는 시나리오
    await fillCardForm();

    const submitButton = await screen.findByRole('button', { name: '확인' });
    await userEvent.click(submitButton);

    expect(await screen.findByText('유효하지 않은 만료일입니다.')).toBeInTheDocument();
  });

  it('submit 중에는 확인 버튼이 비활성화됩니다', async () => {
    let resolvePost: () => void;
    server.use(
      http.post(
        API_ENDPOINTS.cards,
        () =>
          new Promise((resolve) => {
            resolvePost = () => resolve(HttpResponse.json({ id: 'new-id' }, { status: 201 }));
          }),
      ),
    );

    renderAddCardPage();
    await fillCardForm();

    const submitButton = await screen.findByRole('button', { name: '확인' });
    userEvent.click(submitButton);

    await waitFor(() => expect(submitButton).toBeDisabled());
    resolvePost!();
  });
});
