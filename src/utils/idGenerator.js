export const idGenerator = (function () {
  let id = 0;

  const increaseId = () => {
    id = id + 1;
  };

  return {
    getId: () => {
      increaseId();

      return id;
    },
  };
})();
