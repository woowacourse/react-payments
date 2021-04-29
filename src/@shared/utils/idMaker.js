const generateIdMaker = () => {
  const getRandomNumber = () => Math.round(Math.random() * 1000000000);
  let index = -1;

  return () => {
    index += 1;
    return `${getRandomNumber()}-${index}`;
  };
};

const getId = generateIdMaker();

export default getId;
