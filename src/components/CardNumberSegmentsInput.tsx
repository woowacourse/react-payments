import { type ChangeEvent } from "react";
import ValidationInput from "./Common/ValidationInput";
import type { CardBrand, CardNumberSegments } from "../types";
import { CARD_BRAND_CONFIGS } from "../types";
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
  const handleSingleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange([event.target.value]);
  };

  const handleSegmentChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = Number(event.target.dataset.index);
    const newSegments = [...props.value];
    newSegments[inputIndex] = event.target.value;
    props.onChange(newSegments);
  };

  if (!props.brand) {
    return (
      <Flex direction="column" gap={10}>
        <Label>카드 번호</Label>
        <ValidationInput
          type="text"
          inputMode="numeric"
          placeholder="카드 번호를 입력해 주세요"
          value={props.value.join("")}
          onChange={handleSingleChange}
          isShowError={true}
          validations={numericOnlyValidations}
        />
      </Flex>
    );
  }

  const segmentLengths = CARD_BRAND_CONFIGS[props.brand].segmentLengths;

  return (
    <Flex direction="column" gap={10}>
      <Label>카드 번호</Label>
      <Flex gap={10}>
        {segmentLengths.map((maxLength, index) => (
          <ValidationInput
            key={index}
            data-index={index}
            type="text"
            inputMode="numeric"
            placeholder={Array.from(
              { length: maxLength },
              (_, i) => (i % 10) + 1,
            ).join("")}
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
