import { type ChangeEvent } from "react";
import ValidationInput from "./Common/ValidationInput";
import type { CardNumberSegments } from "../types";
import Flex from "./Common/Flex";
import Label from "./Common/Label";
import { numberSegmentValidations } from "../utils/validationRules";

interface CardNumberSegmentsInputProps {
  value: CardNumberSegments;
  onChange: (value: CardNumberSegments) => void;
}

function CardNumberSegmentsInput(props: CardNumberSegmentsInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputIndex = Number(event.target.dataset.index);
    const newSegments = [...props.value] as CardNumberSegments;
    newSegments.splice(inputIndex, 1, event.target.value);
    props.onChange(newSegments);
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>카드 번호</Label>
      <Flex gap={10}>
        {props.value.map((el, index) => (
          <ValidationInput
            key={index}
            data-index={index}
            type="text"
            inputMode="numeric"
            placeholder="1234"
            value={el}
            onChange={handleChange}
            isShowError={true}
            validations={numberSegmentValidations}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default CardNumberSegmentsInput;
