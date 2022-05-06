import ReactDOM from 'react-dom';

import * as S from 'styles.js';
import { useState } from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import Card from 'components/Card/Card';
import FormBasic from 'components/Form/FormBasic';
import NextButton from 'components/NextButton/NextButton';

export default function CardConfirmModal({ cardData, onConfirmCard, onCloseModal }) {
  const [nickname, setNickname] = useState('');

  const onChangeInput = (e) => {
    setNickname(e.target.value);
  };

  return (
    <>
      {ReactDOM.createPortal(<S.Backdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <S.Modal>
          <PageTitle hasPrevButton={true} onClickPrev={onCloseModal}>
            카드 추가
          </PageTitle>
          <S.CardAlignBox>
            <S.TitleText>카드 정보를 최종 확인해주세요.</S.TitleText>
            <Card
              cardName={cardData.cardName}
              cardColor={cardData.cardColor}
              cardNumber={cardData.cardNumber}
              cardExpiration={cardData.cardExpiration}
              cardOwner={cardData.cardOwner}
              isSmall={false}
            />
            <FormBasic onSubmitForm={onConfirmCard} payload={nickname}>
              <S.UnderlineInput
                onChange={onChangeInput}
                placeholder="카드 별칭을 입력해주세요."
                type="text"
              />
              <NextButton disabled={false} color={cardData.cardColor}>
                등록
              </NextButton>
            </FormBasic>
          </S.CardAlignBox>
        </S.Modal>,
        document.getElementById('overlay-root'),
      )}
    </>
  );
}
