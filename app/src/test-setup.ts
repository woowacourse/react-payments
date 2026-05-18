import { setupServer } from "msw/node";
import { handlers } from "./features/card/mocks/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
