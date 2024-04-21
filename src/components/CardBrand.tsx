import { useEffect } from 'react';
import Image from './style/CardBrand.style';
import Visa from '../asset/Visa.svg';
import MasterCard from '../asset/Mastercard.svg';
import { useState } from 'react';
import REGEX from '../constants/regex';

type Props = 'Visa' | 'MasterCard';

const BRAND_TABLE: Record<Props, string> = {
  Visa: Visa,
  MasterCard: MasterCard,
};

const CardBrand = ({ ...props }) => {
  const { firstCardNumbers } = props;

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
