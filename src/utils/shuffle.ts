const shuffle = <T>(arr: T[]) => {
  const result = [...arr];

  result.forEach((el, idx, arr) => {
    const randomIdx = Math.floor(Math.random() * arr.length);

    arr[idx] = arr[randomIdx];
    arr[randomIdx] = el;
  });

  return result;
};

export default shuffle;
