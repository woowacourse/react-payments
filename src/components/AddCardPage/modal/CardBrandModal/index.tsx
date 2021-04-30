import { FC, useEffect, useRef } from 'react';
import { CardBrand } from '../../../../types';
import { IconButton } from '../../../shared/Button/IconButton';
import Modal from '../../../shared/Modal';
import { ButtonContainer } from './styles';

interface Props {
  cardBrands: CardBrand[];
  onSelect: (cardBrand: CardBrand) => void;
  onClose: () => void;
}

const CardBrandModal: FC<Props> = ({ cardBrands, onSelect, onClose }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  return (
    <Modal onClose={onClose} type="bottom">
      <ButtonContainer ref={containerRef} tabIndex={0}>
        {cardBrands.map((brand, index) => (
          <IconButton key={index} backgroundColor={brand.color} onClick={() => onSelect(brand)}>
            {brand.name}
          </IconButton>
        ))}
      </ButtonContainer>
    </Modal>
  );
};

export default CardBrandModal;
