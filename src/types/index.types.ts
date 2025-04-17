export type Position = "first" | "second" | "third" | "fourth"
export type ExpirationPeriod = "month" | "year"

export type CardNumberProps = {
    cardNumber: {
        first: string ,
        second: string,
        third: string,
        fourth : string,
    },
    changeCardNumber : (position : Position , cardNumber : string) => void
}

export type ExpirationPeriodProps = {
    expirationPeriod: {
        month: string,
        year: string,
    },
    changeExpirationPeriod: (expirationPeriod: ExpirationPeriod, date: string) => void
}
    
export type CardCVCNumberSectionProps = {
    CVCNumber: string,
    changeCVCNumber : (CVCNumber : string) => void
}