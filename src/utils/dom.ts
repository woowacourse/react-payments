export const $ = <TElement extends Element = HTMLElement, USelector extends string = string>(
  selector: USelector,
  context: Document | HTMLElement = document,
): USelector extends `${string}?` ? TElement | null : TElement => {
  const target = context.querySelector<TElement>(selector.endsWith('?') ? selector.slice(0, -1) : selector);

  if (!target && !selector.endsWith('?')) throw new Error('존재하지 않는 요소입니다.');

  return target!;
};
