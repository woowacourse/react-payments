import Modal from '../../common/Modal';
import { IconButton } from '../../common/Button';
import { ButtonContainer } from './styles';
import { FC } from 'react';
import { CardBrand } from '../../../types';

interface Props {
  cardData: CardBrand[];
  onClickCardBrandButton: (cardBrand: CardBrand) => void;
  modalClose: () => void;
}

const CardBrandModal: FC<Props> = ({ cardData, onClickCardBrandButton, modalClose }) => {
  return (
    <Modal modalClose={modalClose} type="bottom">
      <ButtonContainer>
        {cardData.map((data, index) => (
          <IconButton key={index} backgroundColor={data.color} onClick={() => onClickCardBrandButton(data)}>
            {data.name}
          </IconButton>
        ))}
      </ButtonContainer>
    </Modal>
  );
};

export default CardBrandModal;
