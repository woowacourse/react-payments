import { memo, useEffect, useRef, useState } from "react";
import type { FocusEvent, KeyboardEvent, MouseEvent } from "react";
import type { CardFormData, CardFormValidation, Issuer } from "../../../types";
import Button from "../../common/Button/Button";
import CardIssuerSelection from "./CardIssuerSelection/CardIssuerSelection";
import InputContainer from "../../common/InputContainer/InputContainer";
import Label from "../../common/Label/Label";
import Modal from "../../common/Modal/Modal";
import { useModalContext } from "../../../contexts/ModalContext";
import DownIcon from "../../../assets/down-icon.svg";
import styles from "./style.module.css";

interface CardIssuerProps {
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

const CardIssuer = ({
  isError,
  updateInputValue,
  updateInputError,
}: CardIssuerProps) => {
  const { isModalOpen, isModalClosed, openModal, closeModal } =
    useModalContext();
  const [value, setValue] = useState<Issuer | "">("");
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isModalClosed) {
      updateInputError("issuer", value);
      buttonRef.current?.focus();
    }
  }, [isModalClosed, updateInputError, value]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Tab") {
      updateInputError("issuer", value);
    }
  };

  const onBlur = (event: FocusEvent<HTMLButtonElement>) => {
    if (isModalOpen) return;

    updateInputError("issuer", event.currentTarget.value as Issuer);
  };

  const onOptionClick = (event: MouseEvent<HTMLButtonElement>) => {
    setValue(event.currentTarget.value as Issuer);
    updateInputValue("issuer", event.currentTarget.value as Issuer);
    closeModal();
  };

  return (
    <InputContainer
      className={styles.container}
      supportingText={{
        error: "카드에 표시된 카드사를 선택해주세요",
      }}
      isError={isError}
    >
      <Label htmlFor="issuer" required>
        카드사
      </Label>
      <Button
        ref={buttonRef}
        type="button"
        id="issuer"
        name="issuer"
        className={`select-button flex-jsb flex-row-reverse ${
          isError ? styles.error : ""
        } ${value ? styles.selected : ""}`}
        icon={DownIcon}
        value={value}
        autoFocus
        onClick={openModal}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      >
        {value ? `${value}` : "카드사를 선택해주세요"}
      </Button>
      {isModalOpen && (
        <Modal>
          <CardIssuerSelection
            onOptionClick={onOptionClick}
            close={closeModal}
          />
        </Modal>
      )}
    </InputContainer>
  );
};

export default memo(CardIssuer);
