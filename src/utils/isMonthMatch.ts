import { isNumeric } from './isNumeric';

export const isMonthMatch = (value: string): string | null => {
    const error = isNumeric(value);
    if (error) return error;
    if (value.length === 2 && (Number(value) > 12 || Number(value) < 1)) return '1~12 사이 월을 입력해주세요.';
    return null;
};
