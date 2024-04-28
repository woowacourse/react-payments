import React, { useEffect, useRef, useState } from "react";
import Input from "../common/Input/Input";
import { CardNumberInputWrapper, Dd, Tooltip } from "./CardNumberInput.styles";
import useInput from "../../hooks/useInput";

interface CardNumberInputProps {
  value: string;
  onChange: (value: string) => void;
  setCompleted: (isValid: boolean) => void;
}

const CardNumberInput: React.FC<CardNumberInputProps> = ({
  value,
  onChange,
  setCompleted,
}) => {
  const [inputValues, setInputValues] = useState<string[]>(Array(4).fill(""));
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (index: number, inputValue: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = inputValue;
    setInputValues(newInputValues);
    onChange(newInputValues.join(" "));

    if (inputValue.length === 4 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleValidate = (index: number, isValid: boolean) => {
    setIsValid(isValid);
  };

  const validator = (value: string) => {
    if (!/^\d*$/.test(value)) {
      setErrorMessage("카드 번호는 숫자만 입력 가능합니다.");
      return false;
    }

    if (value.length !== 4) {
      setErrorMessage("카드 번호는 4자리여야 합니다.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  useEffect(() => {
    const isCompleted = inputValues.join("").length === 16 && isValid;
    setCompleted(isCompleted);
  }, [inputValues, isValid]);

  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  return (
    <CardNumberInputWrapper>
      <Dd>
        {[0, 1, 2, 3].map((index) => (
          <div key={index}>
            <Input
              ref={(el) => (inputRefs.current[index] = el)}
              value={inputValues[index]}
              onChange={(inputValue) => handleChange(index, inputValue)}
              onValidate={(isValid) => handleValidate(index, isValid)}
              maxLength={4}
              size="small"
              validator={(value) => validator(value)}
            />
          </div>
        ))}
      </Dd>

      <Tooltip>{!isValid ? errorMessage : ""}</Tooltip>
    </CardNumberInputWrapper>
  );
};

export default CardNumberInput;

// ********************************************* 리팩토링
// const CardNumberInput: React.FC<CardNumberInputProps> = ({
//   value,
//   onChange,
//   setCompleted,
// }) => {
//   const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

//   const validator = (value: string) => {
//     if (!/^\d*$/.test(value)) {
//       return "카드 번호는 숫자만 입력 가능합니다.";
//     }

//     if (value.length !== 4) {
//       return "카드 번호는 4자리여야 합니다.";
//     }

//     return "";
//   };

//   const inputs = Array.from({ length: 4 }, (_, index) => {
//     const { value, isValid, errorMessage, handleChange } = useInput({
//       validator: (value: string) => validator(value) === "",
//       onValidate: (isValid: boolean) => setCompleted(isValid),
//     });

//     return {
//       value,
//       isValid,
//       errorMessage,
//       handleChange: (inputValue: string) => {
//         handleChange(inputValue);
//         onChange(inputValue);

//         if (inputValue.length === 4 && index < inputRefs.current.length - 1) {
//           inputRefs.current[index + 1]?.focus();
//         }
//       },
//     };
//   });

//   return (
//     <CardNumberInputWrapper>
//       <Dd>
//         {inputs.map((input, index) => (
//           <div key={index}>
//             <Input
//               ref={(el) => (inputRefs.current[index] = el)}
//               value={input.value}
//               onChange={input.handleChange}
//               onValidate={() => {}}
//               maxLength={4}
//               size="small"
//             />
//           </div>
//         ))}
//       </Dd>

//       <Tooltip>
//         {inputs.some((input) => !input.isValid) &&
//           inputs.find((input) => !input.isValid)?.errorMessage}
//       </Tooltip>
//     </CardNumberInputWrapper>
//   );
// };

// export default CardNumberInput;
