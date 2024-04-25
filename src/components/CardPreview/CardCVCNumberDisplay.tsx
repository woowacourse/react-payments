import styled from 'styled-components';

interface CardCVCNumberDisplayProps {
  cardCVCNumber: string;
}

const CardCVCNumberDisplay = ({ cardCVCNumber }: CardCVCNumberDisplayProps) => {
  return <CardCVCNumberContainer>{cardCVCNumber}</CardCVCNumberContainer>;
};

const CardCVCNumberContainer = styled.div`
  display: flex;
  align-items: center;

  position: absolute;
  right: 16px;

  height: 20px;
  width: 27px;

  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

export default CardCVCNumberDisplay;
