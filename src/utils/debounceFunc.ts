let debounce: ReturnType<typeof setTimeout> | undefined;

const debounceFunc = (func: () => void, time: number) => {
  if (debounce) {
    clearTimeout(debounce);
  }
  debounce = setTimeout(func, time);
};

export default debounceFunc;
