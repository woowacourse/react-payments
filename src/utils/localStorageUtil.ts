interface LocalStorageUtilType {
  getItem: (key: string) => any;
  setItem: (key: string, value: any) => Promise<void>;
  removeItem: (key: string) => void;
  clear: () => void;
}

const localStorageUtil: LocalStorageUtilType = {
  getItem(key) {
    const item = localStorage.getItem(key);

    if (item === null) {
      throw new Error(
        `LocalStorage Error: local storage 내부에 ${key}값을 갖는 데이터가 없습니다.`
      );
    }

    return JSON.parse(item);
  },

  setItem(key, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('inside setTimeOut');
        localStorage.setItem(key, JSON.stringify(value));
        console.log('>>> JSON.stringify(value):', JSON.stringify(value));
        resolve();
      }, 10000);
    });
  },

  removeItem(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};

export default localStorageUtil;
