import { setupWorker } from 'msw/browser';
import { cardsHandlers } from './handlers/cards';

export const worker = setupWorker(...cardsHandlers);
