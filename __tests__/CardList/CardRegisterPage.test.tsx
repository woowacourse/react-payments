import '@testing-library/jest-dom/vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { postCard } from '../../src/api/cards';
import { HTTPError, NetworkError } from '../../src/api/error';
import type { CardFormInfoType } from '../../src/domain/card/types/card';
import CardRegisterPage from '../../src/feature/CardRegister/CardRegisterPage';
import { useCardForm } from '../../src/feature/CardRegister/hooks/useCardForm';

vi.mock('../../src/api/cards', () => ({
  postCard: vi.fn(),
}));

vi.mock('../../src/feature/CardRegister/hooks/useCardForm', () => ({
  useCardForm: vi.fn(),
}));

const completedCardFormInfo: CardFormInfoType = {
  cardNumbers: ['1234', '1234', '1234', '1234'],
  expiryMonth: '12',
  expiryYear: '28',
  cvcNumber: '123',
  cardCompanyId: 'bc',
  password: '12',
};

const noop = vi.fn();
const setInputRef = () => noop;

const completedFields = {
  numbers: {
    cardNumbers: completedCardFormInfo.cardNumbers,
    segmentLengths: [4, 4, 4, 4],
    firstErrorIndex: -1,
    errorMessage: '',
    isComplete: true,
    setInputRef,
    handleNumbersChange: vi.fn(),
    handleNumbersBlur: vi.fn(),
    handleKeyDown: vi.fn(),
  },
  cardCompany: {
    cardCompanyId: completedCardFormInfo.cardCompanyId,
    cardCompanyOptions: [{ value: 'bc', label: 'BC카드' }],
    isComplete: true,
    handleChange: vi.fn(),
  },
  expiry: {
    expiryMonth: completedCardFormInfo.expiryMonth,
    expiryYear: completedCardFormInfo.expiryYear,
    firstErrorIndex: -1,
    errorMessage: '',
    isComplete: true,
    setInputRef,
    handleMonthChange: vi.fn(),
    handleYearChange: vi.fn(),
    handleExpiryBlur: vi.fn(),
    handleKeyDown: vi.fn(),
  },
  cvc: {
    cvcNumber: completedCardFormInfo.cvcNumber,
    errorMessage: '',
    hasError: false,
    isComplete: true,
    handleChange: vi.fn(),
    handleBlur: vi.fn(),
  },
  password: {
    password: completedCardFormInfo.password,
    errorMessage: '',
    hasError: false,
    isComplete: true,
    handleChange: vi.fn(),
    handleBlur: vi.fn(),
  },
};

const mockedPostCard = vi.mocked(postCard);
const mockedUseCardForm = vi.mocked(useCardForm);

const renderCardRegisterPage = () => {
  render(
    <MemoryRouter>
      <CardRegisterPage />
    </MemoryRouter>,
  );
};

describe('CardRegisterPage', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
    mockedUseCardForm.mockReturnValue({
      fields: completedFields,
      cardPreviewInfo: {
        cardNumbers: completedCardFormInfo.cardNumbers,
        cardCompanyId: completedCardFormInfo.cardCompanyId,
        expiryMonth: completedCardFormInfo.expiryMonth,
        expiryYear: completedCardFormInfo.expiryYear,
      },
      cardFormInfo: completedCardFormInfo,
      currentStep: 5,
      hasFormError: false,
    });
  });

  it('카드 등록 실패 시 서버 에러 메시지를 해당 필드에 표시한다.', async () => {
    const user = userEvent.setup();
    const serverErrorMessage = '유효하지 않은 카드 번호입니다.';

    mockedPostCard.mockRejectedValueOnce(
      new HTTPError('INVALID_CARD_NUMBER', serverErrorMessage),
    );

    renderCardRegisterPage();

    await user.click(screen.getByRole('button', { name: '제출' }));

    expect(mockedPostCard).toHaveBeenCalledWith(completedCardFormInfo);
    expect(await screen.findByText(serverErrorMessage)).toBeInTheDocument();
  });

  it('카드 등록 실패 시 네트워크 에러 메시지를 form-level 영역에 표시한다.', async () => {
    const user = userEvent.setup();
    const serverErrorMessage = '네트워크 오류가 발생했습니다.';

    mockedPostCard.mockRejectedValueOnce(new NetworkError(serverErrorMessage));

    renderCardRegisterPage();

    await user.click(screen.getByRole('button', { name: '제출' }));

    expect(mockedPostCard).toHaveBeenCalledWith(completedCardFormInfo);
    expect(await screen.findByText(serverErrorMessage)).toBeInTheDocument();
  });
});
