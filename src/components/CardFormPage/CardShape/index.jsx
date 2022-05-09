import React, { useContext, useState } from 'react';

import Card from '../../common/Card';
import CardCompany from '../../common/CardCompany';
import Modal from '../../common/Modal';
import { CardContainer, GridContainer } from './style';

import { CardInfoDispatchContext } from '../../../context';

const cardCompanyList = [
  { color: '#E24141', name: '포코 카드' },
  { color: '#547CE4', name: '준 카드' },
  { color: '#73BC6D', name: '공원 카드' },
  { color: '#DE59B9', name: '브랜 카드' },
  { color: '#04C09E', name: '로이드 카드' },
  { color: '#E76E9A', name: '도비 카드' },
  { color: '#F37D3B', name: '콜린 카드' },
  { color: '#FBCD58', name: '썬 카드' },

  { color: '#66adff', name: '태태 카드' },
  { color: '#cc1b32', name: '콜라 카드' },
  { color: '#69ff66', name: '비녀 카드' },
  { color: '#000', name: '동키콩 카드' },
  { color: '#ff5100', name: '꼬재 카드' },
  { color: '#192dff', name: '블링 카드' },
];

function CardShape({ dimensions, cardCompany, cardNumbers, cardOwner, cardDate }) {
  const cardInfoDispatch = useContext(CardInfoDispatchContext);
  const [isShown, setIsShown] = useState(true);

  const handleClickBox = () => {
    setIsShown(prevIsShown => !prevIsShown);
  };

  const handleClickCompany = ({ color: hexColor, name }) => {
    cardInfoDispatch({
      type: 'UPDATE_COMPANY',
      cardCompany: { hexColor, name },
    });

    setIsShown(!isShown);
  };

  return (
    <CardContainer>
      <div onClick={handleClickBox}>
        <Card cardCompany={cardCompany} cardNumbers={cardNumbers} cardOwner={cardOwner} cardDate={cardDate} />
      </div>
      <Modal isOpen={isShown} setIsOpen={setIsShown} dimensions={dimensions}>
        <GridContainer>
          {cardCompanyList.map(({ color, name }, index) => (
            <CardCompany
              hexColor={color}
              name={name}
              key={index}
              handleClick={() => handleClickCompany({ color, name })}
            />
          ))}
        </GridContainer>
      </Modal>
    </CardContainer>
  );
}

export default CardShape;
