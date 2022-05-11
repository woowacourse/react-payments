const blockInputString = (e) => {
  isNaN(e.key) && e.preventDefault();
};

export { blockInputString };
