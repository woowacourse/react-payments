import Modal from '../../common/Modal';
import { IconButton } from '../../common/Button';
import { ButtonContainer } from './styles';
import { FC, useEffect, useRef } from 'react';
import { CardBrand } from '../../../types';

interface Props {
  cardBrands: CardBrand[];
  onClickCardBrandButton: (cardBrand: CardBrand) => void;
  onClose: () => void;
}

const CardBrandModal: FC<Props> = ({ cardBrands, onClickCardBrandButton, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  return (
    <Modal onClose={onClose} type="bottom">
      <ButtonContainer ref={containerRef} tabIndex={0}>
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
