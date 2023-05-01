const scrollWindow = {
  toTop: () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
};

export default scrollWindow;
