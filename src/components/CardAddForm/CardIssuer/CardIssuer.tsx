import styles from './style.module.css';
import { FocusEvent, KeyboardEvent, MouseEvent, memo, useRef, useState } from 'react';
import type { CardFormData, CardFormValidation, Issuer } from '../../../types';
import { useModalContext } from '../../../contexts/ModalContext';
import CardIssuerSelection from './CardIssuerSelection/CardIssuerSelection';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import DownIcon from '../../../assets/down-icon.svg';

interface CardIssuerProps {
  isError: boolean;
  updateInputValue: <K extends keyof CardFormData>(key: K, value: CardFormData[K]) => void;
  updateInputError: <K extends keyof CardFormValidation>(key: K, value: CardFormData[K]) => void;
}

function CardIssuer({ isError, updateInputValue, updateInputError }: CardIssuerProps) {
  const { isModalOpen, openModal, closeModal } = useModalContext();
  const [value, setValue] = useState<Issuer | ''>('');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const focusButton = () => {
    buttonRef.current?.focus();
  };

  const handleCloseModal = () => {
    updateInputError('issuer', value);
    closeModal();
    focusButton();
  };

  const onClosePress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Tab') {
      updateInputError('issuer', value);
    }
  };

  const onBlur = (event: FocusEvent<HTMLButtonElement>) => {
    if (isModalOpen) return;

    updateInputError('issuer', event.currentTarget.value as Issuer);
  };

  const onOptionClick = (event: MouseEvent<HTMLButtonElement>) => {
    setValue(event.currentTarget.value as Issuer);
    updateInputValue('issuer', event.currentTarget.value as Issuer);
    closeModal();
    focusButton();
  };

  return (
    <InputContainer
      className={styles.container}
      supportingText={{
        error: '카드에 표시된 카드사를 선택해주세요',
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
        className={`select-button flex-jsb flex-row-reverse ${isError ? styles.error : ''} ${
          value ? styles.selected : ''
        }`}
        icon={DownIcon}
        value={value}
        autoFocus
        onClick={openModal}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      >
        {value ? `${value}` : '카드사를 선택해주세요'}
      </Button>
      {isModalOpen && (
        <Modal onKeyDown={onClosePress}>
          <CardIssuerSelection onOptionClick={onOptionClick} close={handleCloseModal} />
        </Modal>
      )}
    </InputContainer>
  );
}

export default memo(CardIssuer);
