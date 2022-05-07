const store = {
  key: 'react-payments',
  load() {
    return JSON.parse(localStorage.getItem(this.key));
  },
  save(data) {
    localStorage.setItem(this.key, JSON.stringify(data));
  },
};

export default store;
