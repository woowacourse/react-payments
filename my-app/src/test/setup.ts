import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { beforeAll, afterEach, afterAll, vi } from 'vitest';
import { server } from '../mocks/server';
import { cards } from '../mocks/mockDB';

beforeAll(() => server.listen());

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  server.resetHandlers();
  cards.length = 0;
});

afterAll(() => {
  server.close();
});
