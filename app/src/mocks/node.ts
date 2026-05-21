import { setupServer } from 'msw/node';
import { cardHandlers } from './handlers/card';

export const server = setupServer(...cardHandlers);
