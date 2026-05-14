import '@testing-library/jest-dom/vitest';
import {afterAll, afterEach, beforeAll} from 'vitest';

import {resetMockCards} from '@/mocks/cardStore';
import {server} from '@/mocks/server';

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterEach(() => {
  server.resetHandlers();
  resetMockCards();
});

afterAll(() => {
  server.close();
});
