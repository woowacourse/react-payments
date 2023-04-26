import React, { KeyboardEvent, useCallback, useMemo } from 'react';
import { isValidateKey } from '../../utils/input';

export function useCardNumber() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (isValidateKey(e, '[0-9]')) return;

    e.preventDefault();
  }, []);

  const defaultConditions = useMemo(
    () => ({
      pattern: '[0-9]{4}',
      maxLength: 4,
      asChild: true,
      required: true,
      onKeyDown,
    }),
    []
  );
  return { defaultConditions };
}

export function useCardExpirationDate() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (isValidateKey(e, '[0-9]')) return;

    e.preventDefault();
  }, []);

  const defaultConditions = {
    maxLength: 2,
    asChild: true,
    required: true,
    onKeyDown,
  };

  const monthConditions = useMemo(
    () => ({
      ...defaultConditions,
      pattern: '^(0[1-9]|1[0-2])$',
      placeholder: 'MM',
    }),
    []
  );

  const yearConditions = useMemo(
    () => ({
      ...defaultConditions,
      pattern: '^(2[3-9]|[3-3][0-9]|40)$',
      placeholder: 'YY',
    }),
    []
  );
  return { monthConditions, yearConditions };
}

export function useCardName() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (isValidateKey(e, '^[a-zA-Z]$')) return;

    e.preventDefault();
  }, []);

  const defaultConditions = useMemo(
    () => ({
      asChild: true,
      required: true,
      placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
      pattern: '^[a-zA-Z]{1,30}$',
      maxLength: 30,
      onKeyDown,
    }),
    []
  );
  return { defaultConditions };
}

export function useCardAlias() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (isValidateKey(e, '^[a-zA-Z0-9가-힣]+$')) return;

    e.preventDefault();
  }, []);

  const defaultConditions = useMemo(
    () => ({
      asChild: true,
      required: true,
      placeholder: '카드의 이름(별칭)을 입력하세요.',
      pattern: '^[a-zA-Z0-9가-힣]{1,30}$',
      maxLength: 30,
      onKeyDown,
    }),
    []
  );
  return { defaultConditions };
}

export function useCardCVC() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (isValidateKey(e, '[0-9]')) return;

    e.preventDefault();
  }, []);

  const defaultConditions = useMemo(
    () => ({
      pattern: '[0-9]{3}',
      maxLength: 3,
      asChild: true,
      required: true,
      onKeyDown,
    }),
    []
  );
  return { defaultConditions };
}
export function useCardPassword() {
  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (isValidateKey(e, '[0-9]')) return;

    e.preventDefault();
  }, []);

  const defaultConditions = useMemo(
    () => ({
      pattern: '[0-9]',
      maxLength: 1,
      asChild: true,
      required: true,
      onKeyDown,
    }),
    []
  );
  return { defaultConditions };
}
