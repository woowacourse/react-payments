export const isNumeric = (value: string): string | null =>
    Number.isNaN(Number(value)) ? '숫자만 입력할 수 있습니다.' : null;
