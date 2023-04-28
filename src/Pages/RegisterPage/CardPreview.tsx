import { LENGTH } from 'constants/constants';
import styled from 'styled-components';
import { Card } from 'types/Card';

const CardPreview = ({ cardInfo, handleModal }: any) => {
  return (
    <StyledCard onClick={handleModal} $background={cardInfo.color}>
      <Chip />
      <CardInfo $background={cardInfo.color}>
        <Numbers>
          <Span>{cardInfo.number1}</Span>
          <Span>{cardInfo.number2}</Span>
          <Secret>{cardInfo.number3.replaceAll(/[0-9]/gi, 'ㆍ')}</Secret>
          <Secret>{cardInfo.number4.replaceAll(/[0-9]/gi, 'ㆍ')}</Secret>
        </Numbers>
        <Wrapper>
          <p>{cardInfo.name}</p>
          <Date>{`${cardInfo.month} ${
            cardInfo.month.length === LENGTH.EXPIRATION ? '/' : ''
          } ${cardInfo.year}`}</Date>
        </Wrapper>
      </CardInfo>
    </StyledCard>
  );
};

type StyledCardProps = {
  $background: string;
};

const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 213px;
  height: 133px;
  padding: 0 15px;
  margin: 30px auto 26px;
  border-radius: 5px;
  background: ${(props) => props.$background};

  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.25) 3px 3px 5px;
  cursor: pointer;
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
