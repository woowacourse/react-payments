const preventBubbling = (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();
};

const preventEvent = (e: React.KeyboardEvent<HTMLElement>) => {
  e.preventDefault();
};

export { preventBubbling, preventEvent };
