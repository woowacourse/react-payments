import { type ChangeEvent } from "react";
import ValidationInput from "./Common/ValidationInput";
import {
  validateNumberString,
  validateStringLength,
  validateStringMaxLength,
} from "../utils";
import type { CardNumberSegments } from "../types";
import Flex from "./Common/Flex";
import Label from "./Common/Label";

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
            validations={[
              {
                type: "validateOnChange",
                validator: validateNumberString,
                message: "숫자만 입력 가능합니다.",
              },
              {
                type: "validateOnChange",
                validator: (input: string) => validateStringMaxLength(input, 4),
                message: "4자리까지만 입력 가능합니다.",
              },
              {
                type: "validateOnBlur",
                validator: (input: string) => validateStringLength(input, 4),
                message: "4자리를 입력해주세요.",
              },
            ]}
          />
        ))}
      </Flex>
    </Flex>
  );
}

export default CardNumberSegmentsInput;
