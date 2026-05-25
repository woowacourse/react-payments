import '@testing-library/jest-dom';
import { beforeAll, afterEach, afterAll, vi } from 'vitest';
import { server } from '../msw/server';
import { resetCards } from '../msw/handlers/cards';

export { server };

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  resetCards();
  vi.restoreAllMocks();
});
afterAll(() => server.close());
