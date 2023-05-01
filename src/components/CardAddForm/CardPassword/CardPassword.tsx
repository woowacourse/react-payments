import { memo, useRef } from "react";
import type { ChangeEvent, FocusEvent } from "react";
import type { CardFormData, CardFormValidation } from "../../../types";
import Input from "../../common/Input/Input";
import InputContainer from "../../common/InputContainer/InputContainer";
import Label from "../../common/Label/Label";
import { SECURITY_TEXT_ICON } from "../../../constants";
import { PASSWORD_UNIT_MAX_LENGTH, PATTERN } from "../../../constants/input";
import { formatNumber } from "../../../utils/formatter";
import styles from "./style.module.css";

interface CardPasswordProps {
  isError: boolean;
  updateInputValue: <K extends keyof CardFormData>(
    key: K,
    value: CardFormData[K]
  ) => void;
  updateInputError: <K extends keyof CardFormValidation>(
    key: K,
    value: CardFormData[K]
  ) => void;
}

const CardPassword = ({
  isError,
  updateInputValue,
  updateInputError,
}: CardPasswordProps) => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const lastInputRef = useRef<HTMLInputElement>(null);

  const onChange = () => {
    if (!firstInputRef.current || !lastInputRef.current) return;

    firstInputRef.current.value = formatNumber(firstInputRef.current.value);
    lastInputRef.current.value = formatNumber(lastInputRef.current.value);
    updateInputValue("password", [
      firstInputRef.current.value,
      lastInputRef.current.value,
    ]);
  };

  const onFirstInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange();

    if (
      event.target.value.length === PASSWORD_UNIT_MAX_LENGTH &&
      lastInputRef.current
    ) {
      lastInputRef.current.focus();
    }
  };

  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    if (!firstInputRef.current || !lastInputRef.current) return;

    updateInputError("password", [
      firstInputRef.current.value,
      lastInputRef.current.value,
    ]);
  };

  return (
    <InputContainer
      supportingText={{
        error: "카드 비밀번호 앞 2자리 숫자를 입력해주세요",
      }}
      isError={isError}
    >
      <Label htmlFor="password" id="password-label" required>
        비밀번호
      </Label>
      <div className={styles.container} onBlur={onBlur}>
        {Array.from({ length: 2 }, (_, index) => (
          <Input
            ref={index === 0 ? firstInputRef : lastInputRef}
            key={index}
            type="password"
            id={index === 0 ? "password" : `password${index}`}
            name="password"
            data-index={index}
            maxLength={PASSWORD_UNIT_MAX_LENGTH}
            autoComplete="off"
            inputMode="numeric"
            pattern={PATTERN.PASSWORD}
            required
            aria-labelledby={index === 0 ? undefined : "password-label"}
            isError={isError}
            onChange={index === 0 ? onFirstInputChange : onChange}
          />
        ))}
        <div className={styles.passwordPlaceholder}>
          <p className="passwordItem">{SECURITY_TEXT_ICON}</p>
          <p className="passwordItem">{SECURITY_TEXT_ICON}</p>
        </div>
      </div>
    </InputContainer>
  );
};

export default memo(CardPassword);
