import styles from './style.module.css';
import { FocusEvent, KeyboardEvent, MouseEvent, memo, useRef, useState } from 'react';
import CardIssuerSelection from './CardIssuerSelection/CardIssuerSelection';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import { useModal } from '../../../hooks/common/useModal';
import DownIcon from '../../../assets/down-icon.svg';

interface CardIssuerProps {
  isError: boolean;
  updateInputValue: (key: string, value: any) => void;
  updateCardInputError: (key: string, value: any) => void;
}

function CardIssuer({ isError, updateInputValue, updateCardInputError }: CardIssuerProps) {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [value, setValue] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

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

  const onBlur = (event: FocusEvent<HTMLButtonElement>) => {
    if (modalRef.current && modalRef.current.contains(event.relatedTarget)) return;

    updateCardInputError(event.currentTarget.name, event.currentTarget.value);
  };

  const onOptionClick = (event: MouseEvent<HTMLButtonElement>) => {
    setValue(event.currentTarget.value);
    updateInputValue('issuer', event.currentTarget.value);
    closeModal();
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
        type="button"
        id="issuer"
        name="issuer"
        className={`select-button flex-jsb flex-row-reverse ${isError ? styles.error : ''} ${
          value ? styles.selected : ''
        }`}
        icon={DownIcon}
        value={value}
        autoFocus
        tabIndex={1}
        onClick={openModal}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      >
        {value ? `${value}` : '카드사를 선택해주세요'}
      </Button>
      {isModalOpen && (
        <Modal
          ref={modalRef}
          isOpen={isModalOpen}
          close={handleCloseModal}
          onKeyDown={onClosePress}
        >
          <CardIssuerSelection onOptionClick={onOptionClick} close={handleCloseModal} />
        </Modal>
      )}
    </InputContainer>
  );
}

export default memo(CardIssuer);
