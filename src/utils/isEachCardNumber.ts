export const isEachCardNumber = (value: string) => {
    return value.length === 4 && !Number.isNaN(value) && value === value.trim();
};

// TODO isYearNumber 함수와 거의 형태가 동일한데 필요할까 고민
// TODO isMonthMatch는 반환하는 값 형태가 null일 때 통과하는 형태고 isEachCardNumber와 isYearNumber는 boolean 반환인데....
