import styles from './style.module.css';
import { KeyboardEvent, MouseEvent, useRef, useState } from 'react';
import { CardInputValidation, Issuer } from '../../../types';
import CardIssuerSelection from './CardIssuerSelection/CardIssuerSelection';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import { useModal } from '../../../hooks/useModal';
import { isElementOfType } from '../../../utils/eventUtils';
import DownIcon from '../../../assets/down-icon.svg';

interface CardIssuerProps {
  handleInputChange: (name: string, value: string) => void;
  validateInput: (key: keyof CardInputValidation, value: string | string[]) => boolean | undefined;
  value: Issuer | '';
}

function CardIssuer({ handleInputChange, validateInput, value }: CardIssuerProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isError, setIsError] = useState(false);

  const handleCloseModal = () => {
    if (!buttonRef.current) return;

    const isValid = validateInput('issuer', buttonRef.current.value);
    setIsError(!isValid);
    closeModal();
  };

  const onClosePress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  const onOptionClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isElementOfType<HTMLDivElement>(event)) return;

    const value = event.target.dataset.value!;

    if (buttonRef.current) buttonRef.current.value = value;

    handleInputChange('issuer', value);
    handleCloseModal();
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
