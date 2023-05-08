const waitMilliseconds = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, milliseconds * 1000);
  });

export default waitMilliseconds;
