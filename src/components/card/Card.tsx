import styled from 'styled-components';
import { createUniqueId, isPrevDate } from '../../utils';
import { useState } from 'react';
import Error from '../common/Error';

interface CardProps {
  cardNumberSet: string[];
  owner: string;
  onDeleteClick?: () => void;
  month: string;
  year: string;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div<{ isHome: boolean }>`
  width: 213px;
  height: 133px;
  background: #333;
  box-shadow: 3px 3px 5px #00000040;
  border-radius: 5px;
  padding: 10px 18px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  cursor: ${({ isHome }) => (isHome ? 'pointer' : '')};
`;
const Title = styled.div`
  color: #383838;
  font-size: 12px;
  height: 14px;
  margin-bottom: 22px;
`;
const Magnet = styled.div`
  background: #cbba64;
  position: absolute;
  top: 40px;
  width: 40px;
  height: 26px;
  margin-bottom: 15px;
  border-radius: 4px;
`;
const CardNumber = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  margin-bottom: 4px;
  align-items: center;
`;
const CardNumberItem = styled.span`
  width: 34px;
  letter-spacing: 2px;

  &:nth-child(3) {
    letter-spacing: -3px;
  }

  &:nth-child(4) {
    letter-spacing: -3px;
  }
`;

const OwnerAndExpiracyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Owner = styled.span`
  display: inline-block;
  width: 130px;
  color: #fff;
  font-weight: bold;
  overflow-x: hidden;
  word-break: break-all;
  font-size: 14px;
`;

const Expiracy = styled.span`
  color: #fff;
  float: right;
  font-weight: bold;
  font-size: 14px;
`;

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 213px;
  height: 133px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.7);
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 8px 20px;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #9e9c9c;
  }
`;

const DeleteWrapper = styled(Button)`
  color: #fff;
  background-color: #ff0033;

  &:hover {
    background-color: #ea5270;
  }
`;

const CancleWrapper = styled(Button)`
  background-color: #fff;

  &:hover {
    background-color: #9e9c9c;
  }
`;

const ENCRYPT_INDEX = 2;

export default function Card({
  cardNumberSet,
  owner,
  month,
  year,
  onDeleteClick,
}: CardProps) {
  const [isClick, setIsClick] = useState(false);
  const onwerName = owner.length > 10 ? owner.slice(0, 10) : owner;

  const toggleIsClick = () => {
    setIsClick((prev) => !prev);
  };

  const isPrevCard = isPrevDate(Number(year), Number(month));
  return (
    <CardContainer>
      <Container>
        <Wrapper onClick={toggleIsClick} isHome={onDeleteClick ? true : false}>
          <Title></Title>
          <Magnet />
          <div>
            <CardNumber>
              {cardNumberSet.map((cardNumberItem: string, index: number) => (
                <CardNumberItem key={createUniqueId()}>
                  {index >= ENCRYPT_INDEX
                    ? '•'.repeat(cardNumberItem.length)
                    : cardNumberItem}
                </CardNumberItem>
              ))}
            </CardNumber>
            <OwnerAndExpiracyWrapper>
              <Owner title={owner}>{onwerName}</Owner>
              <Expiracy>{`${month}/${year}`}</Expiracy>
            </OwnerAndExpiracyWrapper>
          </div>
        </Wrapper>
        {isClick && onDeleteClick && (
          <QuestionWrapper>
            <DeleteWrapper onClick={onDeleteClick}>삭제</DeleteWrapper>
            <CancleWrapper onClick={toggleIsClick}>취소</CancleWrapper>
          </QuestionWrapper>
        )}
      </Container>
      {onDeleteClick && isPrevCard && <Error text="기한이 지난 카드입니다." />}
    </CardContainer>
  );
}
