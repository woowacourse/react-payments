import { setupServer } from "msw/node";

import { handlers } from "./handler.ts";

export const server = setupServer(...handlers);
