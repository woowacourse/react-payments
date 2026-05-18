import { setupWorker } from 'msw/browser';
import { cardHandlers } from './handlers/card';

export const worker = setupWorker(...cardHandlers);
