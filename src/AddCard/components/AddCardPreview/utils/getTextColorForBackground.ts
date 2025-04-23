// 접근성 기준에 따라서 색을 골라준다고 하네용

export default function getTextColorForBackground(hexColor: string): string {
  const hex = hexColor.replace("#", "");

  const r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.slice(0, 2), 16);
  const g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.slice(2, 4), 16);
  const b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.slice(4, 6), 16);

  const [R, G, B] = [r, g, b].map((c) => {
    const channel = c / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : Math.pow((channel + 0.055) / 1.055, 2.4);
  });

  const luminance = 0.2126 * R + 0.7152 * G + 0.0722 * B;

  return luminance > 0.179 ? "#000000" : "#FFFFFF";
}
