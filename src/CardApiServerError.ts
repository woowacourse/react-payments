import type { ServerError } from './utils/cardFetcher';

export class CardAPiServerError extends Error {
    declare code: string;

    constructor({ code, message }: ServerError) {
        super(message);
        this.code = code;
    }
}
