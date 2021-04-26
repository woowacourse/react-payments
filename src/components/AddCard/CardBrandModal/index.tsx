import Modal from '../../common/Modal';
import { IconButton } from '../../common/Button';
import { ButtonContainer } from './styles';
import { FC } from 'react';
import { CardBrand } from '../../../types';

interface Props {
  cardBrands: CardBrand[];
  onClickCardBrandButton: (cardBrand: CardBrand) => void;
  modalClose: () => void;
}

const CardBrandModal: FC<Props> = ({ cardBrands, onClickCardBrandButton, modalClose }) => {
  return (
    <Modal modalClose={modalClose} type="bottom">
      <ButtonContainer>
        {cardBrands.map((brand, index) => (
          <IconButton key={index} backgroundColor={brand.color} onClick={() => onClickCardBrandButton(brand)}>
            {brand.name}
          </IconButton>
        ))}
      </ButtonContainer>
    </Modal>
  );
};

export default CardBrandModal;
