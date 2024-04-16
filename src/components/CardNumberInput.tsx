import Input from './Input';
import styled from 'styled-components';
import { TitleContainer, Title, SubTitle } from '../styles/TitleContainer.styled';

const CardNumberInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  width: 100%;
`;

const InputLabel = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
`;

interface CardNumberInputProps {
  cardNumber: string[];
  setCardNumber: React.Dispatch<React.SetStateAction<string[]>>;
}

function CardNumberInput({ cardNumber, setCardNumber }: CardNumberInputProps) {
  const onCardNumberChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = e.target.value;

    setCardNumber(newCardNumber);
  };

  return (
    <div>
      <TitleContainer>
        <Title>결제할 카드 번호를 입력해 주세요.</Title>
        <SubTitle>본인 명의의 카드만 결제 가능합니다.</SubTitle>
      </TitleContainer>
      <CardNumberInputContainer>
        <InputLabel>카드 번호</InputLabel>
        <InputContainer>
          {Array.from({ length: 4 }).map((_, index) => (
            <Input key={index} type="number" placeholder="1234" onChange={onCardNumberChange(index)}></Input>
          ))}
        </InputContainer>
      </CardNumberInputContainer>
    </div>
  );
}

export default CardNumberInput;
