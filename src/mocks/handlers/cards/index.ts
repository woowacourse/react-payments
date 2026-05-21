import { handler as getCards } from './get';
import { handler as postCard } from './post';
import { handler as deleteCard } from './delete';

export const cardHandlers = [getCards, postCard, deleteCard];
