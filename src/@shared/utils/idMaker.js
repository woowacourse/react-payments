const generateIdMaker = () => {
  const getRandomNumber = () => Math.round(Math.random() * 1000000000);
  let index = 0;

  return () => `${getRandomNumber()}-${index++}`;
};

const getId = generateIdMaker();

export default getId;
