import { http, HttpResponse } from 'msw'

export const handlers = [
    http.get('주소', () => {
        return HttpResponse.json({
            cardNumber: "1111111111111111",
            expirationDate: {month: 12, year: 12},
            cvc: "123",
        })
    })
]