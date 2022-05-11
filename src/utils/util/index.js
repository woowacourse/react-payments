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
  function generateId() {
    return `${[...new Array(10)].map(() => Math.floor(Math.random() * 10)).join('')}`;
  }
  return {
    generateNonDuplicatedId() {
      history.forEach(item => console.log(item));
      let id = generateId();
      while (history.has(id)) {
        id = generateId();
      }
      history.add(id);
      return id;
    },
  };
})();

export const isJSONArray = str => {
  try {
    const data = JSON.parse(str);

    if (!data || !Array.isArray(data)) {
      throw new Error('error');
    }
  } catch (e) {
    return false;
  }
  return true;
};
