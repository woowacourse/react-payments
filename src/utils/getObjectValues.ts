const getObjectValues = <T>(object: { [key: string]: T }): T[] => {
  return Object.values(object) as T[];
};

export default getObjectValues;
