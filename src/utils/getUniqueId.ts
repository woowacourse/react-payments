import uuid from 'react-uuid';

const makeUniqueString = (string: string) => {
  return `${string}-${uuid()}`;
};

export default makeUniqueString;
