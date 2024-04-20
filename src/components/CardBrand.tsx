import { useEffect } from 'react';
import styled from 'styled-components';
import Visa from '../asset/Visa.svg';
import MasterCard from '../asset/Mastercard.svg';
import { useState } from 'react';
import REGEX from '../constants/regex';
import OPTION from '../constants/option';

const Image = styled.img`
  width: 36px;
  height: 28px;
`;
type Props = 'Visa' | 'MasterCard';

const BRAND_TABLE: Record<Props, string> = {
  Visa: Visa,
  MasterCard: MasterCard,
};

const CardBrand = ({ ...props }) => {
  const { firstCardNumbers } = props;

  const [brand, setBrand] = useState<Props>(OPTION.cardBrand.visa);
  const [isBrand, setIsBrand] = useState(false);

  const changeBrand = () => {
    if (REGEX.startsWith4.test(firstCardNumbers)) {
      setBrand(OPTION.cardBrand.visa);
      setIsBrand(true);
    } else if (REGEX.startsWith5155.test(firstCardNumbers)) {
      setBrand(OPTION.cardBrand.masterCard);
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
