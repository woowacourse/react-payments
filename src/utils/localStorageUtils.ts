export const pushList = <Value>(key: string, value: Value) => {
  const list: Value[] = JSON.parse(localStorage.getItem(key) || '[]');
  list.push(value);
  localStorage.setItem(key, JSON.stringify(list));
};

export const getList = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || '[]');
};
