export const objectToString = ({ targetObject, separator = ' ', hideStartIndex }) => {
  if (hideStartIndex) {
    return Object.values(targetObject)
      .map((value, index) => (index >= hideStartIndex ? '*'.repeat(value.length) : value))
      .join(' ');
  }
  return Object.values(targetObject).join(separator);
};

export const { generateNonDuplicatedId } = (function () {
  const history = new Set();
  function generateId(name) {
    return `${name}${[...new Array(10)].map(() => Math.floor(Math.random() * 10)).join('')}`;
  }
  return {
    generateNonDuplicatedId(name) {
      history.forEach(item => console.log(item));
      let id = generateId(name);
      while (history.has(id)) {
        id = generateId(name);
      }
      history.add(id);
      return id;
    },
  };
})();
