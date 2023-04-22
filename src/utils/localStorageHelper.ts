const localStorageHelper = {
  hasKey: (key: string) => Boolean(localStorage.getItem(key)),

  getValue<T>(key: string, defaultValue: T): T {
    if (this.hasKey(key)) return JSON.parse(localStorage.getItem(key) as string);
    return defaultValue;
  },

  setValue: <T>(key: string, value: T) => localStorage.setItem(key, JSON.stringify(value)),
};

export default localStorageHelper;
