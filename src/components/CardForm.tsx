import CardCVCInput from "./CardCVCInput";
import CardNumberSegmentsInput from "./CardNumberSegmentsInput";
import Flex from "./Common/Flex";
import styled from "@emotion/styled";
import CardExpiryDateInput from "./CardExpiryDateInput";
import type { CardFormState, CardNumberSegments } from "../types";

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const Description = styled.h3`
  font-size: 10px;
  color: var(--color-description);
  margin: 0;
`;

interface CardFormProps {
  formState: CardFormState;
  setFormState: (value: CardFormState) => void;
}

function CardForm(props: CardFormProps) {
  return (
    <form>
      <Flex direction="column" gap={16}>
        <Flex direction="column" gap={5}>
          <Title>결제할 카드 번호를 입력해 주세요</Title>
          <Description>본인 명의의 카드만 결제 가능합니다.</Description>
        </Flex>
        <CardNumberSegmentsInput
          value={props.formState.cardNumberSegments}
          onChange={(value: CardNumberSegments) =>
            props.setFormState({
              ...props.formState,
              cardNumberSegments: value,
            })
          }
        />
        <Flex direction="column" gap={5}>
          <Title>카드 유효기간을 입력해 주세요</Title>
          <Description>월/년도(MMYY)를 순서대로 입력해 주세요.</Description>
        </Flex>
        <CardExpiryDateInput
          value={{
            expiryMonth: props.formState.expiryMonth,
            expiryYear: props.formState.expiryYear,
          }}
          onChange={(value: [string, string]) =>
            props.setFormState({
              ...props.formState,
              expiryMonth: value[0],
              expiryYear: value[1],
            })
          }
        />
        <Flex direction="column" gap={5}>
          <Title>CVC 번호를 입력해 주세요</Title>
        </Flex>
        <CardCVCInput
          value={props.formState.cvc}
          onChange={(e) =>
            props.setFormState({ ...props.formState, cvc: e.target.value })
          }
        />
      </Flex>
    </form>
  );
}

export default CardForm;
