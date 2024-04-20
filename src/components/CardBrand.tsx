import { useEffect } from 'react';
import styled from 'styled-components';
import Visa from '../asset/Visa.svg';
import MasterCard from '../asset/Mastercard.svg';
import { useState } from 'react';
import REGEX from '../constants/regex';

const Image = styled.img`
  width: 36px;
  height: 28px;
`;
type Props = 'Visa' | 'MasterCard';

const CardBrand = ({ ...props }) => {
  const { firstCardNumbers } = props;
  const BRAND_TABLE: Record<Props, string> = {
    Visa: Visa,
    MasterCard: MasterCard,
  };

  const [brand, setBrand] = useState<Props>('Visa');
  const [isBrand, setIsBrand] = useState(false);

  const changeBrand = () => {
    if (REGEX.startsWith4.test(firstCardNumbers)) {
      setBrand('Visa');
      setIsBrand(true);
    } else if (REGEX.startsWith5155.test(firstCardNumbers)) {
      setBrand('MasterCard');
      setIsBrand(true);
    } else {
      setIsBrand(false);
    }
  };

  useEffect(() => {
    changeBrand();
  }, [firstCardNumbers]);

  return <>{isBrand ? <Image src={BRAND_TABLE[brand]} /> : null}</>;
};

export default CardBrand;
