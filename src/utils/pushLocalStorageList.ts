const pushLocalStorageList = <Value>(key: string, value: Value) => {
  const list: Value[] = JSON.parse(localStorage.getItem(key) || '[]');
  list.push(value);
  localStorage.setItem(key, JSON.stringify(list));
};

export default pushLocalStorageList;
