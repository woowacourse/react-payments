export const isNumberValue = (value) => {
  return !/[^0-9]/g.test(value);
};

const idMaker = (function* () {
  let id = 0;

  while (1) {
    yield id++;
  }
})();

export const getNewId = () => {
  return idMaker.next().value;
};
