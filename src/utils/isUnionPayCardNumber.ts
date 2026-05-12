export const isUnionPayCardNumber = (prefix: string) => {
    if (prefix.length < 4) return false;

    const prefix4 = parseInt(prefix.slice(0, 4), 10);

    // 622126–622925
    if (prefix4 >= 6221 && prefix4 <= 6229) {
        if (prefix.length >= 6) {
            const prefix6 = parseInt(prefix.slice(0, 6), 10);
            return prefix6 >= 622126 && prefix6 <= 622925;
        }
        return true;
    }

    // 624–626
    if (prefix4 >= 6240 && prefix4 <= 6269) return true;

    // 6282–6288
    if (prefix4 >= 6282 && prefix4 <= 6288) return true;

    return false;
};
