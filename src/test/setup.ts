import '@testing-library/jest-dom/vitest';
import {cleanup} from '@testing-library/react';
import {afterAll, afterEach, beforeAll} from 'vitest';

import {resetMockCards} from '../mocks/cardStore';
import {server} from '../mocks/server';

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterEach(() => {
  cleanup();
  server.resetHandlers();
  resetMockCards();
});

afterAll(() => {
  server.close();
});
