import useForm from './useForm';

export type Validation = { required: boolean; length?: number; errorMessage: string; validateRegex?: RegExp };

export type Register<T extends Record<string, string>> = ReturnType<typeof useForm<T>>['register'];
