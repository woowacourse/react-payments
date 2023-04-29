import styled from 'styled-components';
import { v4 } from 'uuid';
import { COMPANIES } from '../../constants/cardCompany';
import { isCompanyId } from '../modal/content/selectCardCompany';
import { CardViewerProps } from '../../types/card';

interface Props {
  cardInfo: CardViewerProps;
  handleClick?: () => void;
}

export function CardViewer({ cardInfo, handleClick }: Props) {
  return (
    <Style.Wrapper
      onClick={handleClick}
      color={
        isCompanyId(cardInfo.companyId)
          ? COMPANIES[cardInfo.companyId].color
          : ''
      }
      aria-label="카드사 선택 버튼"
    >
      <Style.CompanyName>
        {isCompanyId(cardInfo.companyId) && COMPANIES[cardInfo.companyId].name}
      </Style.CompanyName>
      <Style.ICChip />
      <Style.CardNumberContainer>
        {cardInfo.cardNumber.map((number, index) => (
          <Style.CardNumber
            key={v4()}
            style={{
              letterSpacing:
                window.innerWidth < 768 ? (index > 1 ? '-7px' : '0px') : '0px',
            }}
          >
            {index < 2 ? number : '•'.repeat(number.length)}
          </Style.CardNumber>
        ))}
      </Style.CardNumberContainer>
      <Style.NameAndDateContainer>
        <span>{cardInfo.ownerName === '' ? 'NAME' : cardInfo.ownerName}</span>
        <span>
          {cardInfo.expirationDate.month || 'MM'}/
          {cardInfo.expirationDate.year || 'YY'}
        </span>
      </Style.NameAndDateContainer>
    </Style.Wrapper>
  );
}

const Style = {
  Wrapper: styled.div`
    width: 213px;
    height: 133px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;

    border: none;
    border-radius: 5px;
    background-color: ${(props) =>
      props.color === '' ? '#333333' : props.color};
    color: ${(props) =>
      props.color === COMPANIES['KAKAO'].color ? '#5c210d3' : 'white'};
    padding: 14px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    cursor: pointer;
  `,
  CompanyName: styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
  `,
  ICChip: styled.div`
    width: 40px;
    height: 26px;

    position: absolute;
    top: 50%;
    left: 15px;
    transform: translate(0, -50%);

    border: none;
    border-radius: 4px;
    background-color: #cbba64;
  `,
  CardNumberContainer: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
  `,
  CardNumber: styled.div`
    all: unset;

    width: 30px;
  `,
  NameAndDateContainer: styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;

    margin-top: 3px;
  `,
};
