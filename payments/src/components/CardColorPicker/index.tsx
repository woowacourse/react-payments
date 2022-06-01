import { MutableRefObject, useRef } from 'react';
import Color from '../Color';
import ModalContainer from '../ModalContainer';
import './index.scss';

const cardCategory = [
  { name: '율1', color: '#d47474' },
  { name: '율2', color: '#e0b060' },
  { name: '율3', color: '#edea95' },
  { name: '율4', color: '#7fd179' },
  { name: '율5', color: '#81bcde' },
  { name: '율6', color: '#5853ed' },
  { name: '율7', color: '#b55fd9' },
  { name: '율8', color: '#eb638b' },
];

const CardColorPicker = ({ visible, setVisible, updateForm }) => {
  const modalCotnets: MutableRefObject<HTMLDivElement> = useRef(null);

  return (
    <ModalContainer contentsRef={modalCotnets} visible={visible} setVisible={setVisible}>
      <div ref={modalCotnets} className='palette'>
        {cardCategory.map((card) => (
          <Color key={card.color} name={card.name} color={card.color} updateForm={updateForm} setVisible={setVisible} />
        ))}
      </div>
    </ModalContainer>
  );
};

export default CardColorPicker;
