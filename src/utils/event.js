const preventBubbling = e => {
  e.stopPropagation();
};

const preventEvent = e => {
  e.preventDefault();
};

export { preventBubbling, preventEvent };
