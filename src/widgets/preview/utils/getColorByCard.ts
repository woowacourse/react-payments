export const getColorByCard = (cardType: string) => {
  switch (cardType) {
    case 'BC카드':
      return '#F04651';
    case '신한카드':
      return '#0046FF';
    case '카카오뱅크':
      return '#FFE600';
    case '현대카드':
      return '#000000';
    case '우리카드':
      return '#007BC8';
    case '롯데카드':
      return '#ED1C24';
    case '하나카드':
      return '#009490';
    case '국민카드':
      return '#6A6056';
    default:
      return 'white';
  }
};
