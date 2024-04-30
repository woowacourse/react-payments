function getBrightness(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  return r * 0.299 + g * 0.587 + b * 0.114;
}

export function getDistinctColor(hexColor) {
  const brightness = getBrightness(hexColor);

  return brightness > 128 ? 'dark' : 'light';
}
