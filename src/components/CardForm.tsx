import CardCVCInput from "./CardCVCInput";
import CardNumberSegmentsInput from "./CardNumberSegmentsInput";
import Flex from "./Common/Flex";
import styled from "@emotion/styled";
import CardExpiryDateInput from "./CardExpiryDateInput";
import type { CardFormState, CardNumberSegments } from "../types";
import { CardCompany } from "./CardCompany";
import CardPasswordInput from "./CardPasswordInput";

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
  segmentLengths: number[];
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
          segmentLengths={props.segmentLengths}
          onChange={(value: CardNumberSegments) =>
            props.setFormState({
              ...props.formState,
              cardNumberSegments: value,
            })
          }
        />
        <Flex direction="column" gap={16}>
          <Flex direction="column" gap={5}>
            <Title>카드사를 선택해주세요</Title>
            <Description>현재 국내 카드사만 가능합니다.</Description>
          </Flex>
        </Flex>
        <CardCompany
          value={props.formState.cardCompany}
          onChange={(value: string) => {
            props.setFormState({ ...props.formState, cardCompany: value });
          }}
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
          onChange={(value: string) =>
            props.setFormState({ ...props.formState, cvc: value })
          }
        />
        <Flex direction="column" gap={5}>
          <Title>비밀번호를 입력해 주세요</Title>
          <Description>앞의 2자리를 입력해주세요</Description>
        </Flex>
        <CardPasswordInput
          value={props.formState.cardPassword}
          onChange={(value: string) =>
            props.setFormState({
              ...props.formState,
              cardPassword: value,
            })
          }
        />
      </Flex>
    </form>
  );
}

export default CardForm;
