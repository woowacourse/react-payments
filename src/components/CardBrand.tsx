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
type CardBrand = 'Visa' | 'MasterCard';

const CardBrand = ({ ...props }) => {
  const { firstCardNumbers } = props;
  const BRAND_TABLE: Record<CardBrand, string> = {
    Visa: Visa,
    MasterCard: MasterCard,
  };

  const [brand, setBrand] = useState<CardBrand>('Visa');
  const [isBrand, setIsBrand] = useState(false);

  const changBrand = () => {
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
    changBrand();
  }, [firstCardNumbers]);

  return <>{isBrand ? <Image src={BRAND_TABLE[brand]} /> : <></>}</>;
};

export default CardBrand;
