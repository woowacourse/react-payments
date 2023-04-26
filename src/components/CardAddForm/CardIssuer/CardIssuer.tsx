import styles from './style.module.css';
import { KeyboardEvent, MouseEvent, memo, useRef } from 'react';
import { CardFormValidation, Issuer } from '../../../types';
import CardIssuerSelection from './CardIssuerSelection/CardIssuerSelection';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import { useModal } from '../../../hooks/common/useModal';
import DownIcon from '../../../assets/down-icon.svg';

interface CardIssuerProps {
  value: Issuer | '';
  isError: boolean;
  onInputChange: (event: MouseEvent<HTMLButtonElement>) => void;
  updateCardInputError: (key: keyof CardFormValidation, value: string | string[]) => void;
  moveFocus: (index: number, value: string, maxLength?: number | undefined) => void;
}

function CardIssuer({
  value,
  isError,
  onInputChange,
  updateCardInputError,
  moveFocus,
}: CardIssuerProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleCloseModal = () => {
    updateCardInputError('issuer', value);
    closeModal();
  };

  const onClosePress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Tab') {
      updateCardInputError('issuer', value);
    }
  };

  const onOptionClick = (event: MouseEvent<HTMLButtonElement>) => {
    closeModal();
    onInputChange(event);
    moveFocus(1, event.currentTarget.value);
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
