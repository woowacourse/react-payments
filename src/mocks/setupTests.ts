import '@testing-library/jest-dom/vitest';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './server';

const originalFetch = globalThis.fetch;

beforeAll(() => {
  server.listen();

  const mswFetch = globalThis.fetch;

  globalThis.fetch = (input, init) => {
    if (typeof input === 'string' && input.startsWith('/')) {
      return mswFetch(new URL(input, 'http://localhost'), init);
    }

    return mswFetch(input, init);
  };
});

afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
  globalThis.fetch = originalFetch;
});
