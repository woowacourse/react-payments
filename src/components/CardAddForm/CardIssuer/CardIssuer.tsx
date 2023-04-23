import { KeyboardEvent, MouseEvent, useState } from 'react';
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
  const { isModalOpen, openModal, closeModal } = useModal();
  const [isError, setIsError] = useState(false);

  const handleClose = () => {
    const isValid = validateInput('issuer', value);
    setIsError(!isValid);
    closeModal();
  };

  const onClosePress = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  const onOptionClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isElementOfType<HTMLDivElement>(event)) return;

    const { value } = event.target.dataset;

    if (!value) return;

    const isValid = validateInput('issuer', value);
    setIsError(!isValid);
    handleInputChange('issuer', value);
    closeModal();
  };

  return (
    <InputContainer>
      <Label htmlFor="issuer" required>
        카드사
      </Label>
      {isError ? 'isError' : 'Valid'}
      <Button
        type="button"
        id="issuer"
        className="select-button flex-jsb flex-row-reverse"
        icon={DownIcon}
        onClick={openModal}
      >
        {value ? `${value}` : '카드사를 선택해주세요'}
      </Button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} close={handleClose} onKeyDown={onClosePress}>
          <CardIssuerSelection onOptionClick={onOptionClick} close={handleClose} />
        </Modal>
      )}
    </InputContainer>
  );
}

export default CardIssuer;
