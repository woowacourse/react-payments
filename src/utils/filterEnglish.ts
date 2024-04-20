const filterEnglish = (str: string) => {
  return str
    .split('')
    .filter((char: string) => {
      if (char === ' ' || (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)) return true;
      return false;
    })
    .join('');
};

export default filterEnglish;
