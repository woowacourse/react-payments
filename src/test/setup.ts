import '@testing-library/jest-dom/vitest';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import { server } from './server';

beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));
afterEach(() => {
    cleanup();
    server.resetHandlers();
});
afterAll(() => server.close());
