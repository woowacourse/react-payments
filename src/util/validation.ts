const isValidLength = (number: string, maxLength: number) => {
    if (number.length < maxLength) {
        return false;
    } return true;
}

const isValidNumber = (number: string) => {
    const regex = /^[0-9]*$/;
    if (regex.test(number)) {
        return true;
    } return false;
}

const isValidMonthRange = (number: string) => {
    if (Number(number)<=12 && Number(number)>=1) {
        return true;
    } return false;
}

const isValidYearRange = (number: string) => {
    if (Number(number)<=99 && Number(number)>=25) {
        return true;
    } return false;
}

export { isValidLength, isValidNumber, isValidMonthRange, isValidYearRange}