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

export { isValidLength, isValidNumber}