const isSameLength = (v: string, maxLength: number) => {
  if (v.length === maxLength) {
    return true;
  }

  return false;
};

export default isSameLength;
