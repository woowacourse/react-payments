export type Position = "first" | "second" | "third" | "forth"

export type CardNumberProps = {
    cardNumber: {
        first: string ,
        second: string,
        third: string,
        forth : string,
    },
    changeCardNumber : (position : Position , cardNumber : string) => void
}