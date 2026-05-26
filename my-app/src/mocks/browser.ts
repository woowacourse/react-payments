import { setupWorker } from "msw/browser";

import { handlers } from "./handler.ts";

export const worker = setupWorker(...handlers);
