import { useEffect } from 'react';
import { usePageContext } from 'contexts/PageContext';
import { useCardDataContext } from 'contexts/CardDataContext';

import Button from 'components/@common/Button';
import { Card } from 'components';

import { CARD_COMPANY, PAGE_LIST, CARD_EDITOR_MODE } from 'constants/';
import ResultMessage from './styles';

function CardUpdated() {
  const { setPageTitle, setPageLocation } = usePageContext();
  useEffect(() => setPageTitle('카드 등록 완료'), []);

  const { cardList = {}, currentEditIndex, setCardEditIndex } = useCardDataContext();
  const { cardName, companyId, cardNumber, expireMonth, expireYear, userName } =
    CARD_EDITOR_MODE.NEW === currentEditIndex
      ? cardList[cardList.length - 1] || {}
      : cardList[currentEditIndex] || {};

  const onClickListButton = () => {
    setCardEditIndex(CARD_EDITOR_MODE.NEW);
    setPageLocation(PAGE_LIST.CARD_LIST);
  };

  return (
    <>
      <div className="layout-side-container">
        <ResultMessage>
          <div className="emoji">😍</div>
          <h2 className="title">카드 등록 완료</h2>
          <p className="description">
            {`${CARD_COMPANY[companyId]?.name || '카드 회사'}가 추가되었습니다`}
          </p>
        </ResultMessage>
      </div>

      <div className="layout-main-container fill">
        <Card
          cardNumber={cardNumber}
          companyId={companyId}
          userName={userName}
          expireMonth={expireMonth}
          expireYear={expireYear}
        />
        <h3 align="center">{cardName}</h3>

        <Button type="primary" size="large" width="100%" onClick={onClickListButton}>
          목록으로 이동
        </Button>
      </div>
    </>
  );
}

export default CardUpdated;
