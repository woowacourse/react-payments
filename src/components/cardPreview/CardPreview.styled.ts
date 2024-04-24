import styled from 'styled-components';

interface CardPreviewContainerProps {
  cardCompany?: string;
}

export const CardPreviewContainer = styled.div<CardPreviewContainerProps>`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: ${({ cardCompany }) =>
    cardCompany ? getBackgroundColor(cardCompany) : '#333333'};
  box-shadow: 3px 3px 5px 0px #00000040;
  margin: auto;
`;

const getBackgroundColor = (cardCompany: string): string => {
  switch (cardCompany) {
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
      return '#333333';
  }
};

export const ChipSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 12px;
`;

export const ICChip = styled.div`
  width: 36px;
  height: 22px;
  background: #ddcd78;
  border: 0.5px solid #ddcd781a;
  border-radius: 3px;
`;

export const CardBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 22px;
  background: #ffffff;
  border: 0.5px solid #0000001a;
  border-radius: 3px;

  img {
    width: 60%;
  }
`;

export const CardInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16em;
  text-align: left;
  color: #ffffff;
  margin: 6px 17px;

  div {
    height: 20px;
  }
`;
