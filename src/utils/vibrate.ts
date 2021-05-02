export const vibrate = (pattern: number | number[]) => {
  window.navigator.vibrate(pattern);
};

export const withVibrate = (callback: () => void, pattern: number | number[]) => {
  vibrate(pattern);
  callback();
};
