import { useContext } from 'react';
import { CardInfoContext } from 'CardInfoContextProvider';

import Card from 'components/common/Card';

function CardList() {
  const { state } = useContext(CardInfoContext);
  const { card, cards } = state;

  return (
    <ul>
      {cards.length
        ? cards.map((item) => (
            <li key={item.nickname}>
              <Card isEmpty={false} cardInfo={item} />
              <div className="nickname-text">{item.nickname}</div>
            </li>
          ))
        : ''}

      <li>
        <Card isEmpty cardInfo={card} />
      </li>
    </ul>
  );
}

export default CardList;
