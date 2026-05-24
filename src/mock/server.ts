import { setupServer } from "msw/node";

import cardHandlers from "./_handlers/cards";
import cardDetailHandlers from "./_handlers/cards/[id]";

export const server = setupServer(...cardHandlers, ...cardDetailHandlers);
