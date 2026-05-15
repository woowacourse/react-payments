import {
  forwardRef,
  useState,
  type ChangeEvent,
  type ComponentProps,
} from "react";
import styled from "@emotion/styled";
import Flex from "./Flex";
import InputErrorMessage from "./InputErrorMessage";
import type { Validation } from "../../utils/validationRules";

const Input = styled.input<{ $hasError: boolean }>`
  width: 100%;
  font-size: 13px;
  border-radius: 2px;
  padding: 8px 6px;
  border: 1px solid
    ${({ $hasError }) =>
      $hasError ? "var(--color-error)" : "var(--color-border)"};

  :focus {
    border: 1px solid var(--color-black);
    outline: 0;
  }
`;

interface ValidationInputProps extends ComponentProps<"input"> {
  validations: Validation[];
  isShowError?: boolean;
}

const ValidationInput = forwardRef<HTMLInputElement, ValidationInputProps>(
  function ValidationInput({ validations, onChange, ...props }, ref) {
    const [inputError, setInputError] = useState<null | Error>(null);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
      const failedValidation = validations.find(
        (validation) =>
          event.target.value.length &&
          validation.type === "validateOnChange" &&
          !validation.validator(event.target.value),
      );

      if (failedValidation) {
        setInputError(new Error(failedValidation.message));
        return;
      }

      setInputError(null);
      onChange?.(event);
    };

    const handleOnBlur = (
      event: React.FocusEvent<HTMLInputElement, Element>,
    ) => {
      const failedValidation = validations.find(
        (validation) =>
          typeof props.value === "string" &&
          props.value.length &&
          validation.type === "validateOnBlur" &&
          !validation.validator(props.value),
      );

      if (failedValidation) {
        setInputError(new Error(failedValidation.message));
        event.target.focus();
        return;
      }

      setInputError(null);
    };

    return (
      <Flex direction="column" gap={10}>
        <Input
          ref={ref}
          $hasError={!!inputError}
          {...props}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        {props.isShowError && (
          <InputErrorMessage>{inputError?.message}</InputErrorMessage>
        )}
      </Flex>
    );
  },
);

export default ValidationInput;
