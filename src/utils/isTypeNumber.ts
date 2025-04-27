const isTypeNumber = (v: string) => {
  if (/^[0-9]*$/.test(v)) {
    return true;
  }

  return false;
};

export default isTypeNumber;
