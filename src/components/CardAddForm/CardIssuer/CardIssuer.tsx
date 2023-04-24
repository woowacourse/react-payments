import styles from './style.module.css';
import { KeyboardEvent, MouseEvent, useRef } from 'react';
import { Issuer } from '../../../types';
import CardIssuerSelection from './CardIssuerSelection/CardIssuerSelection';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import { useModal } from '../../../hooks/useModal';
import { useError } from '../../../hooks/useError';
import DownIcon from '../../../assets/down-icon.svg';

interface CardIssuerProps {
  onInputChange: (event: MouseEvent<HTMLButtonElement>) => void;
  value: Issuer | '';
  isValid: boolean;
}

function CardIssuer({ onInputChange, value, isValid }: CardIssuerProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isError, handleError, removeError } = useError(isValid);

  const handleCloseModal = () => {
    handleError();
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
        value={value}
        icon={DownIcon}
        onClick={openModal}
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

export default CardIssuer;
