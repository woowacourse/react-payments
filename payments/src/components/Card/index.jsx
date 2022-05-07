import { useRef, useState } from 'react';
import './index.scss';

const Card = ({ state: { cardNumber, expiredDate, ownerName, cardName, color, secureCode }, setVisible }) => {
  const cardFront = useRef();
  const cardBack = useRef();

  const mouserOver = () => {
    cardFront.current.style.display = 'none';
    cardBack.current.style.display = 'grid';
  };

  const mouseLeave = () => {
    cardFront.current.style.display = 'grid';
    cardBack.current.style.display = 'none';
  };

  return (
    <div className='card__container' onMouseOver={mouserOver} onMouseLeave={mouseLeave}>
      <div
        className='card-front__container'
        style={{ display: 'grid', backgroundColor: color }}
        onClick={() => setVisible(true)}
        ref={cardFront}
      >
        <p className='card__name'>{cardName}</p>
        <div className='rfid'></div>
        <div className='card__numbers'>
          <div className='number'>{cardNumber[0]}</div>
          <div className='number'>{cardNumber[1]}</div>
          <div className='dots'>{'•'.repeat(cardNumber[2].length)}</div>
          <div className='dots'>{'•'.repeat(cardNumber[3].length)}</div>
        </div>
        <div className='footer'>
          <div className='owner__name'>{ownerName || 'NAME'}</div>
          <div className='expired__date'>
            {expiredDate[0] || 'MM'}/{expiredDate[1] || 'YY'}
          </div>
        </div>
      </div>

      <div
        className='card-back__container'
        style={{ display: 'none', backgroundColor: color }}
        onClick={() => setVisible(true)}
        ref={cardBack}
      >
        <div className='magnetic'></div>
        <p className='authorization'>Authorized signature</p>
        <div className='rfid-back'></div>
        <div className='signature-line'>
          <div className='secure-code'>{secureCode}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
