import Card from '@/components/card/Card';
import { CardListState } from '@/hooks/useCardList';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTemplate from '../components/commons/PageTemplate';
import { ROUTE } from '../route';
type CardListProps = {
  cardList: CardListState;
};
function Landing({ cardList }: CardListProps) {
  const navigate = useNavigate();

  const [currentCard, setCurrentCard] = useState(cardList[cardList.length - 1]);
  const [agree, setAgree] = useState(false);

  const ref = useRef<any>(null);

  const onClickEmptyCardBox = () => {
    navigate(ROUTE.addCard.route, { replace: true });
  };

  const onClickCardFocus = (e, card) => {
    setCurrentCard(card);

    const {
      currentTarget: { offsetLeft },
    } = e;

    ref.current.scroll({ left: offsetLeft - 100, behavior: 'smooth' });
  };

  const onChangeAgreement = () => {
    setAgree((prev) => !prev);
  };

  const onClickSubmit = () => {
    if (agree) {
      alert('결제가 완료되었습니다');
    } else {
      alert('동의해주시죠');
    }
  };

  useEffect(() => {
    ref.current.scroll({
      left: ref.current.scrollWidth - ref.current.clientWidth,
      behavior: 'smooth',
    });
  }, [cardList]);

  return (
    <PageTemplate>
      <div className="pay-inner">
        <h2>보유 카드</h2>
        <div className="card-slider">
          <div className="card-wrapper" ref={ref}>
            <div className="card-box clickable-box" onClick={onClickEmptyCardBox}>
              <div className="empty-card">+</div>
            </div>

            {cardList.map((card) => (
              <div
                key={card.id}
                onClick={(e) => onClickCardFocus(e, card)}
                className={
                  currentCard.id === card.id ? 'card-item-wrapper card-focus' : 'card-item-wrapper'
                }
              >
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>

        <h2>결제 정보</h2>
        <div className="pay-information">
          <div className="pay-amount">
            <span>총 결제금액</span>
            <span>325,600원</span>
          </div>
        </div>

        <h2>약관 이용 및 동의</h2>
        <div className="agreement-information">
          <label>주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</label>
          <input type="checkbox" checked={agree} onChange={onChangeAgreement} />
        </div>

        <div className="pay-button-form">
          <button type="button" onClick={onClickSubmit}>
            결제하기
          </button>
          <button type="button">취소하기</button>
        </div>
      </div>
    </PageTemplate>
  );
}

export default Landing;
