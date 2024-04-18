import React, { useEffect } from "react";
import styled from "styled-components";
import Visa from "../asset/Visa.svg";
import MasterCard from "../asset/Mastercard.svg";
import { useState } from "react";

const Image = styled.img`
  width: 36px;
  height: 28px;
`
type CardBrand = 'Visa' | 'MasterCard';

const CardBrand = ({ firstCardNumbers }) => {

  const BRAND_TABLE: Record<CardBrand, React.FC<React.SVGProps<SVGElement>>> = {
    'Visa': Visa,
    'MasterCard': MasterCard,
  }

  const [brand, setBrand] = useState<CardBrand>('Visa')
  const [isBrand, setIsBrand] = useState(false)

  const changBrand = () => {
    if (/^[4]\d*$/.test(firstCardNumbers)) {
      setBrand('Visa');
      setIsBrand(true)
    } else if (/^[5][1-5]\d*$/.test(firstCardNumbers)) {
      setBrand('MasterCard');
      setIsBrand(true)
    } else {
      setIsBrand(false)
    }
  }

  useEffect(() => {
    changBrand();
  }, [firstCardNumbers])

  return (
    <>
      {isBrand ? <Image src={BRAND_TABLE[brand]} /> : <></>
      }</>
  )
}

export default CardBrand;