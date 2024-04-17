import { Card } from '../types/card';
import CardChip from '../assets/image/cardChip.png';
import Visa from '../assets/image/Visa.png';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 130px;
  padding: 15px;
  border-radius: 4px;
  background-color: #333333;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const ImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardImg = styled.img`
  width: 36px;
  height: 22px;
`;

const CardNumbers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

const Number = styled.div`
  width: 100px;
  letter-spacing: 3px;
`;

const SecretNumber = styled.div`
  width: 100px;
  font-size: 11px;
  letter-spacing: 0px;
`;

export default function CardView({ cardInfo }: { cardInfo: Card }) {
  return (
    <>
      <CardContainer>
        <ImgBox>
          <CardImg src={CardChip} />
          <CardImg src={Visa} />
        </ImgBox>

        <CardNumbers>
          <Number> {cardInfo.cardNumber1} </Number>
          <Number> {cardInfo.cardNumber2} </Number>
          <SecretNumber>{'•'.repeat(cardInfo.cardNumber3.length)}</SecretNumber>
          <SecretNumber>{'•'.repeat(cardInfo.cardNumber4.length)}</SecretNumber>
        </CardNumbers>
        <div>
          {cardInfo.month.length > 0
            ? `${cardInfo.month} / ${cardInfo.year}`
            : ''}
        </div>
        <div> {cardInfo.userName} </div>
      </CardContainer>
    </>
  );
}
