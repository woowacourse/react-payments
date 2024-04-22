import { useRef, useState } from 'react';
import IcChip from '../../asset/IcChip.svg'

import REGEX from '../../constants/regex';
import BRAND_TABLE from '../../constants/table';

import * as Styled from './CardPreview.styled'

const CardPreview = ({ ...props }: CardInfo) => {
  const { cardNumbers, cardBrand, expirationMonth, expirationYear, name } = props;

  const cardRef = useRef<HTMLDivElement>(null);
  const [animationProps, setAnimationProps] = useState<CardAnimationProps>({
    left: 0,
    top: 0,
    centerX: 0,
    centerY: 0,
    distance: 0,
  });

  const secureNumber = (number: string) => {
    return number.replace(REGEX.allNumbers, '∙');
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (cardRef.current) {
      const { x, y, width, height } = cardRef.current.getBoundingClientRect();
      const left = event.clientX - x
      const top = event.clientY - y
      const centerX = left - width / 2
      const centerY = top - height / 2
      const distance = Math.sqrt(centerX ** 2 + centerY ** 2)

      setAnimationProps({ left, top, centerX, centerY, distance })
    }
  };

  return (
    <Styled.Card ref={cardRef} onMouseMove={handleMouseMove} animationProps={animationProps}>
      <Styled.Light animationProps={animationProps} />
      <Styled.CardHeader>
        <Styled.Image src={IcChip} />
        {cardBrand !== 'none' ? <Styled.Image src={BRAND_TABLE[cardBrand]} /> : <></>}
      </Styled.CardHeader>
      <Styled.CardNumbers>
        <Styled.CardNumber>{cardNumbers[0]}</Styled.CardNumber>
        <Styled.CardNumber>{cardNumbers[1]}</Styled.CardNumber>
        <Styled.CardNumber>{secureNumber(cardNumbers[2])}</Styled.CardNumber>
        <Styled.CardNumber>{secureNumber(cardNumbers[3])}</Styled.CardNumber>
      </Styled.CardNumbers>
      <Styled.CardNameAndExpiration>
        <Styled.CardNameContainer>
          <Styled.NameLabel>NAME</Styled.NameLabel>
          <Styled.Name>{name}</Styled.Name>
        </Styled.CardNameContainer>
        <Styled.CardExpirationContainer>
          <Styled.ExpirationLabel>EXPIRATION</Styled.ExpirationLabel>
          <Styled.Expiration>{`${expirationMonth}${expirationMonth ? '/' : ''}${expirationYear}`}</Styled.Expiration>
        </Styled.CardExpirationContainer>
      </Styled.CardNameAndExpiration>
    </Styled.Card>
  );
};

export default CardPreview;
