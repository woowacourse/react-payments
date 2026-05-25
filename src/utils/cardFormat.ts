import { detectCardBrand, getSegmentLengths } from './cardBrand';

export function formatMaskedCardNumber(maskedCardNumber: string): string {
  const brand = detectCardBrand(maskedCardNumber);
  const segmentLengths = getSegmentLengths(brand);

  let pos = 0;
  return segmentLengths
    .map((len, i) => {
      const segment = maskedCardNumber.slice(pos, pos + len);
      pos += len;

      const isFirst = i === 0;
      const isLast = i === segmentLengths.length - 1;

      // 첫 세그먼트: 전부 노출 (앞 4)
      if (isFirst) return segment;
      // 마지막 세그먼트: 뒤 4자만 노출, 앞은 마스킹
      if (isLast) {
        const maskedPart = '*'.repeat(Math.max(0, len - 4));
        const visiblePart = segment.slice(-4);
        return maskedPart + visiblePart;
      }
      // 중간 세그먼트: 전부 마스킹
      return '*'.repeat(len);
    })
    .join(' ');
}
