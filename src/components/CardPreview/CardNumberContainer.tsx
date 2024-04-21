import styled from 'styled-components';

type TCardNumberType = 'normal' | 'password';

export interface ICardNumberContainerProps {
  data: string;
  type?: TCardNumberType;
}

const PASSWORD_CHAR = '*' as const;
const TYPE = {
  normal: 'normal',
  password: 'password',
} as const;

const getDisplayingCardNumber = (cardNumber: string, type: TCardNumberType) => {
  switch (type) {
    case TYPE.normal:
      return cardNumber;

    case TYPE.password:
      return PASSWORD_CHAR.repeat(cardNumber.length);

    default:
      throw Error('올바른 유형의 카드 번호 타입이 아닙니다.');
  }
};

const CardNumber = ({ data = '', type = TYPE.normal }: ICardNumberContainerProps) => {
  const displayingCardNumber = getDisplayingCardNumber(data, type);

  return <CardNumberContainer>{displayingCardNumber}</CardNumberContainer>;
};

const CardNumberContainer = styled.p`
  display: flex;
  flex-basis: 25%;
  height: 20px;
  font-size: 20px;
`;

export default CardNumber;
