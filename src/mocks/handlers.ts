import { http, HttpResponse } from 'msw';
import { CARD_BRANDS } from '../constants/constants';

const STORAGE_KEY = 'mock-cards';

type StoredCard = {
  id: string;
  cardNumber: string;
  cardPassword: string;
  cvc: string;
  expireDate: string;
  cardBrand: string;
};

const DEFAULT_CARDS: StoredCard[] = [];

const isBrowser =
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const loadCards = (): StoredCard[] => {
  if (!isBrowser) return [...DEFAULT_CARDS];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_CARDS));
    return [...DEFAULT_CARDS];
  }
  try {
    return JSON.parse(raw) as StoredCard[];
  } catch {
    return [...DEFAULT_CARDS];
  }
};

const saveCards = (cards: StoredCard[]) => {
  if (!isBrowser) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
};

export const handlers = [
  http.get('/cards', () => {
    return HttpResponse.json(loadCards());
  }),

  http.post('/cards', async ({ request }) => {
    const body = (await request.json()) as StoredCard;

    if (!(body.cardBrand in CARD_BRANDS)) {
      return HttpResponse.json(
        { code: 'cardBrand', message: '지원하지 않는 카드사입니다' },
        { status: 400 }
      );
    }

    const cards = loadCards();
    const nextId =
      cards.length === 0 ? 1 : Math.max(...cards.map((c) => Number(c.id))) + 1;
    const card: StoredCard = { ...body, id: String(nextId) };
    cards.push(card);
    saveCards(cards);
    return HttpResponse.json(card, { status: 201 });
  }),

  http.delete('/cards/:id', ({ params }) => {
    const cards = loadCards();
    const filtered = cards.filter((c) => c.id !== params.id);
    saveCards(filtered);
    return new HttpResponse(null, { status: 204 });
  }),
];
