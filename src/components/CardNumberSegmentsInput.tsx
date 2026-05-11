import { type ChangeEvent } from "react";
import ValidationInput from "./Common/ValidationInput";
import type { CardNumberSegments } from "../types";
import Flex from "./Common/Flex";
import Label from "./Common/Label";
import { numberSegmentValidations } from "../utils/validationRules";

interface CardNumberSegmentsInputProps {
  value: CardNumberSegments;
  segmentLengths: number[];
  onChange: (value: CardNumberSegments) => void;
}

function CardNumberSegmentsInput(props: CardNumberSegmentsInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = Number(event.target.dataset.index);
    const newSegments = [...props.value];
    newSegments[inputIndex] = event.target.value;
    props.onChange(newSegments);
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>카드 번호</Label>
      <Flex gap={10}>
        {props.segmentLengths.map((maxLength, index) => (
          <ValidationInput
            key={index}
            data-index={index}
            type="text"
            inputMode="numeric"
            placeholder={"1".repeat(maxLength)}
            value={props.value[index] ?? ""}
            onChange={handleChange}
            isShowError={true}
            validations={numberSegmentValidations(maxLength)}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default CardNumberSegmentsInput;
