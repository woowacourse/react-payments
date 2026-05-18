import type { ServerError } from './utils/cardFetcher';

export class CardAPiServerError extends Error {
    code: string;
    message: string;
    constructor({ code, message }: ServerError) {
        super(message);
        this.code = code;
    }
}
