import { useEffect, useState } from 'react';

import { Visa, MasterCard, Dot, DotBlack } from '../../assets';
import * as S from './CardPreview.style';

import { CARD_BRANDS, CARD_NUMBER } from '../../constants/conditions';
import { cardNumbersType } from '../../types/cardNumbers';
import { cardBrandsType } from '../../types/cardBrands';
import checkCardGlobalBrand from '../../utils/checkCardGlobalBrand';

interface CardPreviewProps {
  cardNumbers: cardNumbersType;
  brand: cardBrandsType;
  month: string;
  year: string;
  owner: string;
  CVC: string;
  showCardBackside: boolean;
}

export default function CardPreview({
  cardNumbers,
  brand,
  month,
  year,
  owner,
  CVC,
  showCardBackside,
}: CardPreviewProps) {
  const [logoImage, setLogoImage] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (cardNumbers[0].length < 1) setLogoImage(null);
    if (logoImage === null && cardNumbers[0].length >= 1 && cardNumbers[0].length <= 2) {
      const logo = handleLogoImage(cardNumbers);
      setLogoImage(logo);
    }
  }, [logoImage, cardNumbers]);

  const handleLogoImage = (cardNumbers: cardNumbersType) => {
    if (checkCardGlobalBrand(cardNumbers[0]) === 'Visa') {
      return <img src={Visa} alt="비자 카드" />;
    }
    if (checkCardGlobalBrand(cardNumbers[0]) === 'MasterCard') {
      return <img src={MasterCard} alt="마스터 카드" />;
    }
    return null;
  };

  const getCardNumberComponent = (number: string, index: number) => {
    if (index <= 1) return `${number} `;
    return Array.from({ length: number.length }).map((_, idx) => {
      const img = brand && brand === CARD_BRANDS.카카오뱅크.name ? DotBlack : Dot;
      return <img src={img} key={idx} alt="dot" />
    });
  };

  return (
    <>
      {!showCardBackside && (
        <S.CardFrontside $brand={brand}>
          <S.CardHeader>
            <S.ChipBox />
            <S.LogoBox>{logoImage}</S.LogoBox>
          </S.CardHeader>
          <S.CardBody>
            <S.InfoContainer>
              {cardNumbers.map((number, index) => (
                <S.InfoBox $length={CARD_NUMBER.INPUT_FIELD_COUNT} key={index}>
                  {getCardNumberComponent(number, index)}
                </S.InfoBox>
              ))}
            </S.InfoContainer>
            <S.InfoBox>{(month || year) && `${month} / ${year}`}</S.InfoBox>
            <S.InfoBox>{owner}</S.InfoBox>
          </S.CardBody>
        </S.CardFrontside>
      )}
      {showCardBackside && (
        <S.CardBackside>
          <S.CVCBox>{CVC}</S.CVCBox>
        </S.CardBackside>
      )}
    </>
  );
}
