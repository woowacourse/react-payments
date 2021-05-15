const DEFAULT_PATTERN = 10;

export const vibrate = (pattern: number | number[] = DEFAULT_PATTERN) => {
  // TODO: safari일 경우 동작하면 안됨
  window.navigator.vibrate(pattern);
};

export const withVibration = (callback: () => void, pattern: number | number[] = DEFAULT_PATTERN) => {
  vibrate(pattern);
  callback();
};
