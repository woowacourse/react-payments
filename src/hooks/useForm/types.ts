import useForm from './useForm';

export type ValidationType = { required: boolean; length?: number; errorMessage: string; validateRegex?: RegExp };

export type RegisterType<T extends Record<string, string>> = ReturnType<typeof useForm<T>>['register'];
