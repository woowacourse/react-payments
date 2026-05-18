import { http, HttpResponse } from 'msw';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

let cards = [
    {
        id: '550e8400-e29b-41d4-a716-446655440000',
        issuerCode: '31',
        number: '551112******9012',
        expirationDate: '12/28',
    },
    {
        id: '550e8400-e29b-41d4-a716-446655440001',
        issuerCode: '41',
        number: '411111******1111',
        expirationDate: '06/30',
    },
];

export const handlers = [
    // GET /cards
    http.get(`${BASE_URL}/cards`, () => {
        return HttpResponse.json(cards, { status: 200 });
    }),

    // POST /cards
    http.post(`${BASE_URL}/cards`, async ({ request }) => {
        const body = (await request.json()) as {
            number: string;
            expirationDate: string;
            cvc: string;
            issuerCode: string;
        };

        // 400 - INVALID_CARD_NUMBER
        if (body.number === '9999123456789012') {
            return HttpResponse.json(
                { code: 'INVALID_CARD_NUMBER', message: '유효하지 않은 카드 번호입니다.' },
                { status: 400 }
            );
        }

        // 400 - INVALID_CVC
        if (body.cvc === '000') {
            return HttpResponse.json({ code: 'INVALID_CVC', message: '유효하지 않은 CVC입니다.' }, { status: 400 });
        }

        // 400 - INVALID_EXPIRATION_DATE
        const [month] = body.expirationDate.split('/');
        const monthNum = parseInt(month, 10);
        if (!/^\d{2}\/\d{2}$/.test(body.expirationDate) || monthNum < 1 || monthNum > 12) {
            return HttpResponse.json(
                { code: 'INVALID_EXPIRATION_DATE', message: '유효하지 않은 만료일입니다.' },
                { status: 400 }
            );
        }

        const newCard = {
            id: crypto.randomUUID(),
            issuerCode: body.issuerCode,
            number: `${body.number.slice(0, 6)}******${body.number.slice(-4)}`,
            expirationDate: body.expirationDate,
        };

        cards = [...cards, newCard];

        return HttpResponse.json({ id: newCard.id }, { status: 201 });
    }),

    // DELETE /cards/:id
    http.delete(`${BASE_URL}/cards/:id`, ({ params }) => {
        const { id } = params;
        cards = cards.filter((card) => card.id !== id);

        return new HttpResponse(null, { status: 204 });
    }),
];
