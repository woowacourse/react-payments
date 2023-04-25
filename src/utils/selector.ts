export const $ = <E extends Element>(selector: string) => {
  const element = document.querySelector<E>(selector);
  if (element) return element;
  throw new Error(`존재하지 않는 요소입니다: ${selector}`);
};

export const $$ = <E extends Element>(selector: string) => {
  const elements = document.querySelectorAll<E>(selector);
  if (elements.length) return elements;
  throw new Error(`존재하지 않는 요소입니다: ${selector}`);
};
