import { forwardRef, useEffect, useRef, type ReactNode } from "react";
import CardCVCInput from "./CardCVCInput";
import CardNumberSegmentsInput from "./CardNumberSegmentsInput";
import styled from "@emotion/styled";
import CardExpiryDateInput from "./CardExpiryDateInput";
import { CardCompany } from "./CardCompany";
import CardPasswordInput from "./CardPasswordInput";
import Flex from "../Common/Flex";
import {
  CARD_BRAND_CONFIGS,
  DEFAULT_SEGMENT_LENGTHS,
  type CardBrand,
  type CardFormState,
  type CardNumberSegments,
} from "../../types";

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

interface FormSectionProps {
  isVisible: boolean;
  title: string;
  description?: string;
  children: ReactNode;
}

const FormSection = forwardRef<HTMLDivElement, FormSectionProps>(
  function FormSection({ isVisible, title, description, children }, ref) {
    if (!isVisible) return null;
    return (
      <div ref={ref}>
        <Flex direction="column" gap={10}>
          <Flex direction="column" gap={5}>
            <Title>{title}</Title>
            {description && <Description>{description}</Description>}
          </Flex>
          {children}
        </Flex>
      </div>
    );
  },
);

interface CardFormProps {
  formState: CardFormState;
  setFormState: (value: CardFormState) => void;
  brand: CardBrand | undefined;
}

function CardForm(props: CardFormProps) {
  const segmentLengths = props.brand
    ? CARD_BRAND_CONFIGS[props.brand].segmentLengths
    : DEFAULT_SEGMENT_LENGTHS;

  const isCardNumberComplete = segmentLengths.every(
    (len, i) => props.formState.cardNumberSegments[i]?.length === len,
  );

  const isCardCompanySelected = !!props.formState.cardCompany;
  const isExpiryComplete =
    props.formState.expiryMonth.length === 2 &&
    props.formState.expiryYear.length === 2;
  const isCvcComplete = props.formState.cvc.length === 3;

  const cardCompanyRef = useRef<HTMLDivElement>(null);
  const expiryRef = useRef<HTMLDivElement>(null);
  const cvcRef = useRef<HTMLDivElement>(null);
  const passwordRef = useRef<HTMLDivElement>(null);

  const expiryInputRef = useRef<HTMLInputElement>(null);
  const cvcInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isCardNumberComplete)
      cardCompanyRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [isCardNumberComplete]);

  useEffect(() => {
    if (isCardCompanySelected) {
      expiryRef.current?.scrollIntoView({ behavior: "smooth" });
      expiryInputRef.current?.focus();
    }
  }, [isCardCompanySelected]);

  useEffect(() => {
    if (isExpiryComplete) {
      cvcRef.current?.scrollIntoView({ behavior: "smooth" });
      cvcInputRef.current?.focus();
    }
  }, [isExpiryComplete]);

  useEffect(() => {
    if (isCvcComplete) {
      passwordRef.current?.scrollIntoView({ behavior: "smooth" });
      passwordInputRef.current?.focus();
    }
  }, [isCvcComplete]);

  return (
    <form>
      <Flex direction="column" gap={16}>
        <FormSection
          ref={passwordRef}
          isVisible={isCvcComplete}
          title="비밀번호를 입력해 주세요"
          description="앞의 2자리를 입력해주세요"
        >
          <CardPasswordInput
            ref={passwordInputRef}
            value={props.formState.cardPassword}
            onChange={(value: string) =>
              props.setFormState({ ...props.formState, cardPassword: value })
            }
          />
        </FormSection>

        <FormSection
          ref={cvcRef}
          isVisible={isExpiryComplete}
          title="CVC 번호를 입력해 주세요"
        >
          <CardCVCInput
            ref={cvcInputRef}
            value={props.formState.cvc}
            onChange={(value: string) =>
              props.setFormState({ ...props.formState, cvc: value })
            }
          />
        </FormSection>

        <FormSection
          ref={expiryRef}
          isVisible={isCardCompanySelected}
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <CardExpiryDateInput
            ref={expiryInputRef}
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
        </FormSection>

        <FormSection
          ref={cardCompanyRef}
          isVisible={isCardNumberComplete}
          title="카드사를 선택해주세요"
          description="현재 국내 카드사만 가능합니다."
        >
          <CardCompany
            value={props.formState.cardCompany}
            onChange={(value: string) =>
              props.setFormState({ ...props.formState, cardCompany: value })
            }
          />
          <div style={{ height: "16px" }} />
        </FormSection>

        <Flex direction="column" gap={10}>
          <Flex direction="column" gap={5}>
            <Title>결제할 카드 번호를 입력해 주세요</Title>
            <Description>본인 명의의 카드만 결제 가능합니다.</Description>
          </Flex>
          <CardNumberSegmentsInput
            value={props.formState.cardNumberSegments}
            brand={props.brand}
            onChange={(value: CardNumberSegments) =>
              props.setFormState({
                ...props.formState,
                cardNumberSegments: value,
              })
            }
          />
        </Flex>
      </Flex>
    </form>
  );
}

export default CardForm;
