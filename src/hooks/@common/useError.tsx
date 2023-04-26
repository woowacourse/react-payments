import React, { useState } from 'react';

export const INVALID_FORMAT = '올바른 형식을 입력해 주세요';

export default function useErrors<T extends object>() {
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const error = String(Object.values(errors).find((msg) => msg) ?? '');

  const reportError = (error: Partial<typeof errors>) => {
    setErrors((errors) => ({ ...errors, ...error }));
  };

  const initErrors = () => setErrors({});

  return { error, errors, reportError, initErrors };
}
