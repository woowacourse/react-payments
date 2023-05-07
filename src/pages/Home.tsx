import { CreditCard } from 'components/common/Card/CreditCard';
import Header from 'components/common/Header/Header';
import { useNavigate } from 'react-router-dom';
import CardDB from 'db/Cards';
import { Styled as S } from './Home.styles';
import { PageContainer } from 'components/style/PageContainer';
import { MouseEventHandler, useState } from 'react';

export type AnimatedCardProps = {
  index: number;
};

function Home() {
  const [isFolded, setIsFolded] = useState(false);

  const navigate = useNavigate();
  const goRegister = () => {
    navigate('/register');
  };

  const toggleFold: MouseEventHandler<HTMLButtonElement> = () => {
    setIsFolded((prev) => !prev);
  };

  return (
    <>
      <PageContainer>
        <Header text={'보유카드'} />
        <S.CardContainer index={CardDB.getCards().length}>
          <S.ToggleCardListButton onClick={toggleFold}>
            {isFolded ? '카드 목록 펼치기 ▼' : '카드 목록 접기'}
          </S.ToggleCardListButton>
          {CardDB.getCards().length ? null : (
            <S.AddMsgSpan>{'새로운 카드를 등록해주세요'}</S.AddMsgSpan>
          )}
          <S.AnimatedCardContainer className={isFolded ? 'fold' : ''}>
            {CardDB.getCards()
              .map((card, index) => (
                <S.AnimatedCardWrapper index={CardDB.getCards().length - index - 1}>
                  <CreditCard card={card} className={isFolded ? 'fold-card' : ''} />
                  {
                    <S.CardNameSpan className={isFolded ? 'fold-name' : ''}>
                      {card.cardName}
                    </S.CardNameSpan>
                  }
                </S.AnimatedCardWrapper>
              ))
              .reverse()}
          </S.AnimatedCardContainer>
          <S.RegisterButton onClick={goRegister}>+</S.RegisterButton>
        </S.CardContainer>
      </PageContainer>
    </>
  );
}

export default Home;
