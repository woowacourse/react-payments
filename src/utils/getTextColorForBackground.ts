/**
 * 주어진 배경색에 대해 가독성이 좋은 텍스트 색상을 결정합니다.
 *
 * @param {string} backgroundColor - 16진수 색상 코드 (예: "#FFFFFF", "#000000")
 * @returns {string} 배경색의 밝기에 따라 결정된 텍스트 색상 ("#000000" 또는 "#FFFFFF")
 *
 * @description
 * 이 함수는 주어진 배경색의 밝기(luminance)를 계산하여,
 * WCAG(Web Content Accessibility Guidelines) 기준에 따라
 * 가독성이 좋은 텍스트 색상을 반환합니다.
 *
 * - 밝기가 0.179보다 높으면 검은색("#000000") 반환
 * - 밝기가 0.179보다 낮으면 흰색("#FFFFFF") 반환
 *
 * @example
 * getTextColorForBackground("#FFFFFF") // returns "#000000"
 * getTextColorForBackground("#000000") // returns "#FFFFFF"
 */
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
