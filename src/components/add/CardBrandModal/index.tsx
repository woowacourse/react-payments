import Modal from '../../shared/Modal';
import { IconButton } from '../../shared/Button';
import { ButtonContainer } from './styles';
import { FC, useEffect, useRef, VFC } from 'react';
import { CardBrand } from '../../../types';

interface Props {
  cardBrands: CardBrand[];
  onClickCardBrandButton: (cardBrand: CardBrand) => void;
  modalClose: () => void;
}

const CardBrandModal: VFC<Props> = ({ cardBrands, onClickCardBrandButton, modalClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  return (
    <Modal modalClose={modalClose} type="bottom">
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
