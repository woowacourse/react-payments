import { useState } from 'react';
import styled from 'styled-components';
import { CARD_COMPANY_DATA } from '../../../constants/cardCompany';
import { CardCompanyType } from '../../../types/types';
import { isPastDate } from '../../../utils/validate';
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

  const isPrevCard = isPastDate(Number(year), Number(month));
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
                <CardNumberItem key={`${cardNumberItem}${index}`}>
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
  box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.shadow};
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
  background: ${({ theme }) => theme.colors.magnet};
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
  background-color: ${({ theme }) => theme.colors.modalBlack};
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: 8px 20px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: 0.2s color ease-in-out;
`;

const DeleteWrapper = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primaryRed};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondRed};
  }
`;

const CancelWrapper = styled(Button)`
  color: ${({ theme }) => theme.colors.primaryText};
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGray};
  }
`;

const CardTitle = styled.span`
  margin-top: 9px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkGray};
  opacity: 0.9;
`;
