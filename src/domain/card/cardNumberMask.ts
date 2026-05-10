// 몇 번째 칸부터 마스킹할지 선언
const FIRST_MASKED_CARD_NUMBER_GROUP_ORDER = 3;

type MaskedCardNumberGroup = {
  value: string;
  isMasked: boolean;
};

// 지정한 순서부터 카드 번호 칸을 마스킹하고, 표시 상태를 함께 반환
export const maskCardNumberGroups = (cardNumberGroups: string[]): MaskedCardNumberGroup[] =>
  cardNumberGroups.map((group, index) => {
    const groupOrder = index + 1;
    const isMasked = groupOrder >= FIRST_MASKED_CARD_NUMBER_GROUP_ORDER;

    return {
      value: isMasked ? '·'.repeat(group.length) : group,
      isMasked,
    };
  });
