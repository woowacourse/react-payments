import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '../msw/server';
import { resetCards } from '../msw/handlers/cards';

export { server };

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  resetCards();
});
afterAll(() => server.close());
