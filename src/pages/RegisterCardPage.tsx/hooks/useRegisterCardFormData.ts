import { type UseInputProps, useInput } from '@hooks/useInput';

interface RegisterCardFormDataProps {
  cardTitle: UseInputProps;
}

export const useRegisterCardFormData = () => {
  const formData: Record<keyof RegisterCardFormDataProps, UseInputProps> = {
    cardTitle: useInput('', {
      name: 'cardTitleInput',
      maxLength: 20,
      validate: (value: string) => value.length <= 20,
      errorMessage: '20 글자 이하로만 입력 가능해요.',
      isRequired: false,
    }),
  };

  return { formData };
};
