import styled from "@emotion/styled";
import { useCardNumberInput } from "../../../hooks/useCardNumberInput";
import type { CardNumberState } from "../../../types/types";

interface Props extends CardNumberState {
  inputConfig: { name: string; placeholder: string; maxLength: number }[];
}

export default function Input({
  inputConfig,
  cardNumber,
  setCardNumber,
}: Props) {
  const { cardNumberError, handleCardNumberChange } =
    useCardNumberInput(setCardNumber);

  const displayError = cardNumberError.find((value) => value !== "") || "";

  return (
    <Wrapper>
      <Container>
        {inputConfig.map((config, index) => (
          <InfoInput
            type="text"
            key={index}
            {...config}
            value={cardNumber[index]}
            onChange={(e) => handleCardNumberChange(index, e.target.value)}
            $hasError={!!cardNumberError[index]}
          />
        ))}
      </Container>

      {displayError && <Error>{displayError}</Error>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const InfoInput = styled.input<{ $hasError: boolean }>`
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
  ${(props) =>
    props.$hasError &&
    `
    border: 1px solid red;
  `}
`;

const Error = styled.p`
  padding: 0;
  margin: 0 0;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: rgba(255, 61, 61, 1);
`;
