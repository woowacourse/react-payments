export const splitCardNumber = (cardNumber: number) => {
  const result: string[] = [];
  const output: string[] = [];

  `${cardNumber}`.split("").forEach((n) => {
    output.push(n);
    if (output.length === 4) {
      result.push(output.join(""));
      output.length = 0;
    }
  });

  return result;
};
