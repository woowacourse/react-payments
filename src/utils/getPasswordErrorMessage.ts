import { isNumeric } from './isNumeric';

const PASSWORD_LENGTH_ERROR_MESSAGE = '비밀번호 앞 2자리를 입력해주세요.';

export const getPasswordErrorMessage = (value: string) => {
    if (!(value.length === 2)) return PASSWORD_LENGTH_ERROR_MESSAGE;
    const error = isNumeric(value);
    if (error) return error;
    return null;
};
