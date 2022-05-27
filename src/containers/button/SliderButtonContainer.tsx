import React from 'react';

import Button from 'components/button/Button';

type SliderType = 'left' | 'right';

type Props = {
  type: SliderType;
  cardListSlider: any;
  cardLocation: any;
};

function SliderButtonContainer({ type, cardListSlider, cardLocation }: Props) {
  const sliderButtonClick = ({ target }: any) => {
    cardListSlider.current.style.transitionDuration = '1s';
    target.id === 'rightarrow' ? (cardLocation.current -= 1) : (cardLocation.current += 1);
    cardListSlider.current.style.transform = `translateX(${cardLocation.current * 240}px)`;
  };

  return <Button onClick={sliderButtonClick} buttonType={`${type}arrow`} id={`${type}arrow`} />;
}

export default SliderButtonContainer;
