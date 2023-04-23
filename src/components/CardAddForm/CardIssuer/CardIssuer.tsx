import { MouseEvent } from 'react';
import { Issuer } from '../../../types';
import CardIssuerSelection from './CardIssuerSelection/CardIssuerSelection';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import Button from '../../common/Button/Button';
import Modal from '../../common/Modal/Modal';
import { useModal } from '../../../hooks/useModal';
import { isElementOfType } from '../../../utils/eventUtils';
import DownIcon from '../../../assets/down-icon.svg';

interface CardIssuerProps {
  onInputChange: (name: string, value: string) => void;
  value: Issuer | '';
}

function CardIssuer({ onInputChange, value }: CardIssuerProps) {
  const { isModalOpen, openModal, closeModal, onModalClosePress } = useModal();

  const onOptionClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isElementOfType<HTMLDivElement>(event)) return;

    const { name, value } = event.target.dataset;

    if (!name || !value) return;

    onInputChange(name, value);
    closeModal();
  };

  return (
    <InputContainer>
      <Label htmlFor="issuer" required>
        카드사
      </Label>
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
        <Modal isOpen={isModalOpen} close={closeModal} onKeyDown={onModalClosePress}>
          <CardIssuerSelection onOptionClick={onOptionClick} close={closeModal} />
        </Modal>
      )}
    </InputContainer>
  );
}

export default CardIssuer;
