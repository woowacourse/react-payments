import { useEffect } from 'react';

import { usePageContext } from 'contexts/PageContext';
import { useCardDataContext } from 'contexts/CardDataContext';
import { PAGE_LIST } from 'constants';

import { Card } from 'components';
import { CardWallet, ButtonAddCard } from './styles';

function CardList() {
  const { setPageTitle, setPageLocation } = usePageContext();
  useEffect(() => setPageTitle('카드 목록'), []);

  const { cardList } = useCardDataContext();

  return (
    <>
      <div className="layout-side-container">
        <CardWallet>
          {cardList.map((cardData) => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Card key={cardData.id} {...cardData} isMargin={false} />
          ))}
        </CardWallet>
      </div>

      <div className="layout-main-container bottom">
        <ButtonAddCard onClick={() => setPageLocation(PAGE_LIST.CARD_EDITOR)}>
          <div className="icon">➕</div>
          <p className="text">새로운 카드 추가</p>
        </ButtonAddCard>
      </div>
    </>
  );
}

export default CardList;
