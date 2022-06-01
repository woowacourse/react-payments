const store = {
  key: 'react-payments',
  cache: null,
  load() {
    if (!this.cache)
      this.cache = JSON.parse(localStorage.getItem(this.key)) || [];

    return this.cache;
  },
  save(data) {
    this.cache = [...data];
    localStorage.setItem(this.key, JSON.stringify(data));
  },
  post(item) {
    const data = this.load();

    this.save([...data, item]);
  },
  patch(id, item) {
    const data = this.load();
    const index = data.findIndex((_item) => _item.id === id);

    if (!index) return;

    data[index] = { ...data[index], ...item };
    this.save(data);
  },
};

export default store;
