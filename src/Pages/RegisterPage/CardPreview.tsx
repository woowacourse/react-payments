import { LENGTH } from 'constants/constants';
import styled from 'styled-components';
import { Card } from 'types/Card';

interface CardPreviewProps {
  cardInfo: Card;
  onClick?: () => void;
}

const CardPreview = ({ cardInfo, onClick }: CardPreviewProps) => {
  return (
    <>
      <StyledCard onClick={onClick} $background={cardInfo.cardCompany.color}>
        <BankName $background={cardInfo.cardCompany.color}>
          {cardInfo.cardCompany.company}
        </BankName>
        <Chip />
        <CardInfo $background={cardInfo.cardCompany.color}>
          <Numbers>
            <Span>{cardInfo.cardNumber.number1}</Span>
            <Span>{cardInfo.cardNumber.number2}</Span>
            <Secret>
              {cardInfo.cardNumber.number3.replaceAll(/[0-9]/gi, 'ㆍ')}
            </Secret>
            <Secret>
              {cardInfo.cardNumber.number4.replaceAll(/[0-9]/gi, 'ㆍ')}
            </Secret>
          </Numbers>
          <Wrapper>
            <p>{cardInfo.name}</p>
            <Date>{`${cardInfo.date.month} ${
              cardInfo.date.month.length === LENGTH.EXPIRATION ? '/' : ''
            } ${cardInfo.date.year}`}</Date>
          </Wrapper>
        </CardInfo>
      </StyledCard>
      <CardName>{cardInfo.cardName}</CardName>
    </>
  );
};

type StyledCardProps = {
  $background: string;
};

const CardName = styled.p`
  text-align: center;
  margin-bottom: 24px;
`;

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 213px;
  height: 133px;
  padding: 0 15px;
  margin: 30px auto 14px;
  border-radius: 5px;
  background: ${(props) => props.$background};
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 5px;
  cursor: pointer;
`;

const BankName = styled.span<StyledCardProps>`
  color: ${(props) =>
    props.$background === '#fae20c' ? '#000000' : '#ffffff'};
  align-self: flex-start;
  margin: 15px 0 18px 0;
`;

const Chip = styled.div`
  width: 40px;
  height: 26px;
  margin: 0 auto 0 1px;
  background: #cbba64;
  border-radius: 4px;
`;

const CardInfo = styled.div<StyledCardProps>`
  color: ${(props) =>
    props.$background === '#fae20c' ? '#000000' : '#ffffff'};
`;

const Numbers = styled.p`
  margin: 10px 0 12px;
  letter-spacing: 2px;

  & span {
    display: inline-block;
    width: 44px;
  }
`;

const Span = styled.span`
  &:nth-child(1) {
    margin-right: 2px;
  }
`;

const Secret = styled.span`
  letter-spacing: -2px;

  &:nth-child(3) {
    margin-right: 4.8px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 12px;
`;

const Date = styled.p`
  text-align: right;
`;

export default CardPreview;
