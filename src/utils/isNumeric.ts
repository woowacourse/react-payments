export const isNumeric = (value: string): string | null => {
    if (value !== '' && value.trim() === '') return '숫자만 입력할 수 있습니다.';
    return Number.isNaN(Number(value)) ? '숫자만 입력할 수 있습니다.' : null;
};
