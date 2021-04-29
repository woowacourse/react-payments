export const randomKey = (() => {
  let id = 0;
  return () => id++;
})();
