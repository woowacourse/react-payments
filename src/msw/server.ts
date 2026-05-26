import { setupServer } from 'msw/node';
import { cardsHandlers } from './handlers/cards';

export const server = setupServer(...cardsHandlers);
