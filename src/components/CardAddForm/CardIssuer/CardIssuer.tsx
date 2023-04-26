import styles from './style.module.css';
import { KeyboardEvent, MouseEvent, memo, useRef } from 'react';
import { CardFormValidation, Issuer } from '../../../types';
import CardIssuerSelection from './CardIssuerSelection/CardIssuerSelection';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import { useModal } from '../../../hooks/common/useModal';
import { useError } from '../../../hooks/common/useError';
import DownIcon from '../../../assets/down-icon.svg';

interface CardIssuerProps {
  value: Issuer | '';
  onInputChange: (event: MouseEvent<HTMLButtonElement>) => void;
  updateCardInputValidation: (key: keyof CardFormValidation, value: string | string[]) => boolean;
  moveFocus: (index: number, value: string, maxLength?: number | undefined) => void;
}

function CardIssuer({
  value,
  onInputChange,
  updateCardInputValidation,
  moveFocus,
}: CardIssuerProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isError, handleError, removeError } = useError();

  const handleModalError = () => {
    const isValid = updateCardInputValidation('issuer', value);
    handleError(isValid);
  };

  const handleCloseModal = () => {
    handleModalError();
    closeModal();
  };

  const onClosePress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  const onOptionClick = (event: MouseEvent<HTMLButtonElement>) => {
    removeError();
    closeModal();
    onInputChange(event);
    moveFocus(1, event.currentTarget.value);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Tab') {
      handleModalError();
    }
  };

  return (
    <InputContainer className={styles.container}>
      <Label htmlFor="issuer" required>
        카드사
      </Label>
      <Button
        ref={buttonRef}
        type="button"
        id="issuer"
        className={`select-button flex-jsb flex-row-reverse ${isError ? styles.error : ''} ${
          value ? styles.selected : ''
        }`}
        icon={DownIcon}
        autoFocus
        tabIndex={1}
        onClick={openModal}
        onKeyDown={onKeyDown}
      >
        {value ? `${value}` : '카드사를 선택해주세요'}
      </Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} close={handleCloseModal} onKeyDown={onClosePress}>
          <CardIssuerSelection onOptionClick={onOptionClick} close={handleCloseModal} />
        </Modal>
      )}
    </InputContainer>
  );
}

export default memo(CardIssuer);
