import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {createCard} from '@/api/cardsApi';
import type {CardErrorResponse} from '@/domain/card/cardApi.types';
import type {CreateCardRequestParams} from '../../utils/createCardRequest';
import {createCardRequest} from '../../utils/createCardRequest';
import {createEmptyServerFieldErrors, getServerFieldName} from '../../utils/serverFieldErrorUtils';
import type {ServerFieldErrors, ServerFieldName} from '../../utils/serverFieldErrorUtils';

const SUBMIT_ERROR_MESSAGE = '카드 정보를 다시 확인해 주세요';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const ERROR_FIELD_INPUT_IDS: Record<ServerFieldName, string> = {
  cardNumbers: 'card-number-0',
  cardCompany: 'card-company',
  cardExpiryDate: 'card-expiry-month',
  cardCvc: 'card-cvc',
};

type SubmitCardParams = {
  isFormComplete: boolean;
  cardRequestParams: CreateCardRequestParams | null;
};

// 서버 에러가 발생한 입력 필드로 focus 이동
const focusServerErrorField = (fieldName: ServerFieldName) => {
  window.requestAnimationFrame(() => {
    document.getElementById(ERROR_FIELD_INPUT_IDS[fieldName])?.focus();
  });
};

export const useCardRegisterSubmit = () => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState('');
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [serverFieldErrors, setServerFieldErrors] = useState<ServerFieldErrors>(createEmptyServerFieldErrors);

  // 특정 필드의 서버 에러 메시지 제거
  const clearServerFieldError = (fieldName: ServerFieldName) => {
    setServerFieldErrors((prev) => ({
      ...prev,
      [fieldName]: '',
    }));
  };

  // 서버 에러 응답을 필드 에러 상태로 반영
  const applyServerError = (error: CardErrorResponse) => {
    setSubmitStatus('error');

    if (error.type !== 'field') {
      setSubmitError(SUBMIT_ERROR_MESSAGE);
      return;
    }

    const fieldName = getServerFieldName(error.code);

    if (!fieldName) {
      setSubmitError(SUBMIT_ERROR_MESSAGE);
      return;
    }

    setServerFieldErrors((prev) => ({
      ...prev,
      [fieldName]: error.message,
    }));
    focusServerErrorField(fieldName);
  };

  // 카드 등록 요청 후 성공 시 목록 페이지로 이동
  const submitCard = async ({isFormComplete, cardRequestParams}: SubmitCardParams) => {
    if (!isFormComplete || !cardRequestParams) {
      setSubmitError(SUBMIT_ERROR_MESSAGE);
      return;
    }

    setSubmitError('');
    setSubmitStatus('loading');
    setServerFieldErrors(createEmptyServerFieldErrors());

    try {
      await createCard(createCardRequest(cardRequestParams));
      setSubmitStatus('success');
      navigate('/cards');
    } catch (error) {
      applyServerError(error as CardErrorResponse);
    }
  };

  return {
    submitStatus,
    submitError,
    serverFieldErrors,
    clearServerFieldError,
    submitCard,
  };
};
