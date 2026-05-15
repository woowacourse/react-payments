import { useRef, type ChangeEvent } from "react";
import ValidationInput from "./Common/ValidationInput";
import type { CardBrand, CardNumberSegments } from "../types";
import { CARD_BRAND_CONFIGS, DEFAULT_SEGMENT_LENGTHS } from "../types";
import Flex from "./Common/Flex";
import Label from "./Common/Label";
import {
  numberSegmentValidations,
  numericOnlyValidations,
} from "../utils/validationRules";

interface CardNumberSegmentsInputProps {
  value: CardNumberSegments;
  brand: CardBrand | undefined;
  onChange: (value: CardNumberSegments) => void;
}

function CardNumberSegmentsInput(props: CardNumberSegmentsInputProps) {
  const segmentRefs = useRef<(HTMLInputElement | null)[]>([]);
  const segmentLengths = props.brand
    ? CARD_BRAND_CONFIGS[props.brand].segmentLengths
    : DEFAULT_SEGMENT_LENGTHS;

  const handleSingleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange([event.target.value]);
  };

  const handleSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = Number(event.target.dataset.index);
    const newSegments = [...props.value];
    newSegments[inputIndex] = event.target.value;
    props.onChange(newSegments);

    if (event.target.value.length === segmentLengths[inputIndex]) {
      segmentRefs.current[inputIndex + 1]?.focus();
    }
  };

  if (!props.brand && props.value.length === 1) {
    return (
      <Flex direction="column" gap={10}>
        <Label>카드 번호</Label>
        <ValidationInput
          type="text"
          inputMode="numeric"
          placeholder="카드 번호를 입력해 주세요"
          value={props.value[0]}
          maxLength={4}
          onChange={handleSingleChange}
          isShowError={true}
          validations={numericOnlyValidations}
        />
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap={10}>
      <Label>카드 번호</Label>
      <Flex gap={10}>
        {segmentLengths.map((maxLength, index) => (
          <ValidationInput
            key={index}
            ref={(el) => {
              segmentRefs.current[index] = el;
            }}
            data-index={index}
            type="text"
            inputMode="numeric"
            placeholder={"1".repeat(maxLength)}
            value={props.value[index] ?? ""}
            onChange={handleSegmentChange}
            isShowError={true}
            validations={numberSegmentValidations(maxLength)}
            autoFocus={index === 0}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default CardNumberSegmentsInput;
