import { useState } from 'react';
import styled from 'styled-components';
import { CARD_COMPANY_DATA } from '../../../constants/constant';
import { CardCompanyType } from '../../../types/types';
import { createUniqueId, isPrevDate } from '../../../utils';
import { Error } from '../Error';

export interface CardProps {
  cardNumberSet: string[];
  owner: string;
  onDeleteClick?: () => void;
  month: string;
  year: string;
  title?: string;
  companyKind: CardCompanyType;
}

const ENCRYPT_INDEX = 2;
const VIEW_LIMIT_LENGTH = 10;

export default function Card({
  cardNumberSet,
  owner,
  month,
  year,
  onDeleteClick,
  title,
  companyKind = 'default',
}: CardProps) {
  const [isClick, setIsClick] = useState(false);
  const ownerName =
    owner.length > VIEW_LIMIT_LENGTH
      ? owner.slice(0, VIEW_LIMIT_LENGTH)
      : owner;

  const toggleIsClick = () => {
    setIsClick((prev) => !prev);
  };

  const isPrevCard = isPrevDate(Number(year), Number(month));
  return (
    <CardContainer>
      <Container>
        <Wrapper
          onClick={toggleIsClick}
          isHome={onDeleteClick ? true : false}
          bgColor={CARD_COMPANY_DATA[companyKind].backgroundColor}
          fontColor={CARD_COMPANY_DATA[companyKind].color}
        >
          <Title>{CARD_COMPANY_DATA[companyKind].title}</Title>
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
            <OwnerAndExpirationWrapper>
              <Owner title={owner}>{ownerName}</Owner>
              <Expiration>{`${month}/${year}`}</Expiration>
            </OwnerAndExpirationWrapper>
          </div>
        </Wrapper>
        {isClick && onDeleteClick && (
          <QuestionWrapper>
            <DeleteWrapper onClick={onDeleteClick}>삭제</DeleteWrapper>
            <CancelWrapper onClick={toggleIsClick}>취소</CancelWrapper>
          </QuestionWrapper>
        )}
      </Container>
      {title && <CardTitle>{title}</CardTitle>}
      {onDeleteClick && isPrevCard && <Error text="기한이 지난 카드입니다." />}
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
`;

interface WrapperProps {
  isHome: boolean;
  bgColor: string;
  fontColor: string;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: end;
  position: relative;
  width: 213px;
  height: 133px;
  border-radius: 5px;
  padding: 10px 18px;
  box-sizing: border-box;
  color: ${({ fontColor }) => fontColor};
  background: ${({ bgColor }) => bgColor};
  box-shadow: 3px 3px 5px #00000040;
  cursor: ${({ isHome }) => (isHome ? 'pointer' : '')};
`;

const Title = styled.div`
  position: absolute;
  top: 12px;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.085em;
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

const OwnerAndExpirationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Owner = styled.span`
  display: inline-block;
  width: 130px;
  font-weight: bold;
  overflow-x: hidden;
  word-break: break-all;
  font-size: 14px;
`;

const Expiration = styled.span`
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

const CancelWrapper = styled(Button)`
  background-color: #fff;

  &:hover {
    background-color: #9e9c9c;
  }
`;

const CardTitle = styled.span`
  margin-top: 9px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #575757;
  opacity: 0.9;
`;
