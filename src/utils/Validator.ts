const Validator = {
    isNumber : (char : string) => {
        return !isNaN(Number(char));
    },
}

export default Validator;

