import { setupWorker } from "msw/browser";

import cardHandlers from "./_handlers/cards";
import cardDetailHandlers from "./_handlers/cards/[id]";

export const worker = setupWorker(...cardHandlers, ...cardDetailHandlers);
