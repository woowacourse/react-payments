export const $ = <TElement extends Element = HTMLElement, USelector extends string = string>(
  selector: USelector,
  context: Document | HTMLElement = document,
): USelector extends `${string}?` ? TElement | null : TElement => {
  const target = context.querySelector<TElement>(selector.endsWith('?') ? selector.slice(0, -1) : selector);

  return target!;
};

export const isInputElement = (element: Element | null): element is HTMLInputElement => {
  return element instanceof HTMLInputElement;
};
