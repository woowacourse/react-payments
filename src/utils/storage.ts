const store = {
  setStorage(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  getStorage<T>(key: string): T | null {
    const data = localStorage.getItem(key);

    return data && JSON.parse(data);
  },
};

export default store;
