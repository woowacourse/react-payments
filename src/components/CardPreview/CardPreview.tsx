import { useRef, useState } from 'react';
import IcChip from '../../asset/IcChip.svg'

import REGEX from '../../constants/regex';
import { BRAND_TABLE } from '../../constants/table';

import * as Styled from './CardPreview.styled'
import { secureNumber } from '../../util/secureNumber';

interface CardPreviewProps {
  cardInfo: CardInfo;
  cardState: CardState;
  setCardState: React.Dispatch<React.SetStateAction<CardState>>
}

const CardPreview = (props: CardPreviewProps) => {
  const { cardInfo, cardState, setCardState } = props
  const { cardNumbers, cardBrand, cardCompany, expiration, name, cvc, password } = cardInfo;

  const cardRef = useRef<HTMLDivElement>(null);
  const [animationProps, setAnimationProps] = useState<CardAnimationProps>({
    left: 0,
    top: 0,
    centerX: 0,
    centerY: 0,
    distance: 0,
  });

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
    <Styled.Card animationProps={animationProps} cardState={cardState} onClick={() => setCardState(cardState === 'front' ? 'back' : 'front')}>
      <Styled.CardBackground ref={cardRef} onMouseMove={handleMouseMove} cardCompany={cardCompany.value} onClick={() => setCardState('back')}>
        <Styled.Light animationProps={animationProps} />
        <Styled.CardHeader>
          <Styled.Image src={IcChip} />
          {cardBrand.value !== 'none' ? <Styled.Image src={BRAND_TABLE[cardBrand.value]} /> : <></>}
        </Styled.CardHeader>
        <Styled.CardNumbers>
          <Styled.CardNumber>{cardNumbers.value[0]}</Styled.CardNumber>
          <Styled.CardNumber>{cardNumbers.value[1]}</Styled.CardNumber>
          <Styled.CardNumber>{secureNumber(cardNumbers.value[2])}</Styled.CardNumber>
          <Styled.CardNumber>{secureNumber(cardNumbers.value[3])}</Styled.CardNumber>
        </Styled.CardNumbers>
        <Styled.CardNameAndExpiration>
          <Styled.CardNameContainer>
            <Styled.NameLabel>NAME</Styled.NameLabel>
            <Styled.Name>{name.value}</Styled.Name>
          </Styled.CardNameContainer>
          <Styled.CardExpirationContainer>
            <Styled.ExpirationLabel>EXPIRATION</Styled.ExpirationLabel>
            <Styled.Expiration>{`${expiration.value.month}${expiration.value.month ? '/' : ''}${expiration.value.year}`}</Styled.Expiration>
          </Styled.CardExpirationContainer>
        </Styled.CardNameAndExpiration>
      </Styled.CardBackground>
      <Styled.BackCardBackground ref={cardRef} onMouseMove={handleMouseMove} cardCompany={cardCompany.value} onClick={() => setCardState('front')}>
        <Styled.Light animationProps={animationProps} />
        <Styled.BackMagnetic cardCompany={cardCompany.value} />
        <Styled.CVCContainer>
          <Styled.CVCLabel>CVC</Styled.CVCLabel>
          <Styled.CVC>{cvc.value}</Styled.CVC>
        </Styled.CVCContainer>
      </Styled.BackCardBackground>

    </Styled.Card>
  )
};

export default CardPreview;
