import { CardAPiServerError } from '../CardApiServerError';
import { fetcher } from './fetcher';

export interface ServerError {
    code: string;
    message: string;
}

const isServerError = (error: unknown): error is ServerError => {
    return error instanceof Object && 'code' in error && 'message' in error;
};

export const cardFetchError = async <ExpectedSuccessType>(endpoint: string, options: RequestInit = {}) => {
    const defaultOptions = {
        method: 'GET',
        ...options,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_API_BASE_URL}`,
            ...options.headers,
        },
    };
    try {
        const response = await fetcher<ExpectedSuccessType, ServerError>(
            `${import.meta.env.VITE_API_BASE_URL}${endpoint}`,
            defaultOptions
        );
        return response;
    } catch (error) {
        if (isServerError(error)) return new CardAPiServerError(error);
        throw error;
    }
};
