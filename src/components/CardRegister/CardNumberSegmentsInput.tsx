import { useEffect, useRef, type ChangeEvent } from "react";
import {
  CARD_BRAND_CONFIGS,
  type CardBrand,
  type CardNumberSegments,
} from "../../types";
import Flex from "../Common/Flex";
import Label from "../Common/Label";
import InputErrorMessage from "../Common/InputErrorMessage";
import ValidationInput from "../Common/ValidationInput";
import { couldBeValidBrand } from "../../utils/getCardBrand";
import { numberSegmentValidations } from "../../utils/validationRules";

interface CardNumberSegmentsInputProps {
  value: CardNumberSegments;
  brand: CardBrand;
  onChange: (value: CardNumberSegments) => void;
  errorMessage?: string;
}

function CardNumberSegmentsInput({ value, brand, onChange, errorMessage }: CardNumberSegmentsInputProps) {
  const segmentInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const segmentLengths = CARD_BRAND_CONFIGS[brand].segmentLengths;

  useEffect(() => {
    const isFirstComplete = value[0]?.length === segmentLengths[0];
    segmentInputRefs.current[isFirstComplete ? 1 : 0]?.focus();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = Number(event.target.dataset.index);
    const newSegments = [...value];
    newSegments[inputIndex] = event.target.value;
    onChange(newSegments);

    if (event.target.value.length === segmentLengths[inputIndex]) {
      segmentInputRefs.current[inputIndex + 1]?.focus();
    }
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>카드 번호</Label>
      <Flex gap={10}>
        {segmentLengths.map((maxLength, index) => (
          <ValidationInput
            key={index}
            ref={(el) => {
              segmentInputRefs.current[index] = el;
            }}
            data-index={index}
            type="text"
            inputMode="numeric"
            placeholder={"1".repeat(maxLength)}
            value={value[index] ?? ""}
            onChange={handleSegmentChange}
            isShowError={true}
            validations={
              index === 0
                ? [
                    ...numberSegmentValidations(maxLength),
                    {
                      type: "validateOnChange" as const,
                      validator: couldBeValidBrand,
                      message: "유효하지 않은 카드 번호입니다.",
                    },
                  ]
                : numberSegmentValidations(maxLength)
            }
          />
        ))}
      </Flex>
      <InputErrorMessage>{errorMessage}</InputErrorMessage>
    </Flex>
  );
}

export default CardNumberSegmentsInput;
