import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import { server } from "@/mocks/server";
import { resetCards } from "@/mocks/handlers";

beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  server.resetHandlers();
  resetCards();
  vi.restoreAllMocks();
});
afterAll(() => server.close());
