import Preview from '../../widgets/preview/ui/Preview';
import { CardInfoContainer } from '../../features/cardInfo/ui';
import * as S from './CardPage.styles';
import { confirmButtonValidator } from '../../features/cardInfo/validation/cardInfoValidator';
import { css } from '@emotion/react';
import useCardInfo from '../../features/cardInfo/hooks/useCardInfo';
import { useCardInfoContext } from '../../app/context/cardInfo/CardInfoProvider';
import { useEffect } from 'react';
import CustomLinkButton from '../../shared/ui/CustomLinkButton';

function CardPage() {
  const { cardInfo, handleCardInfoChange, error } = useCardInfo();
  const { cardInfos, updateCardInfos } = useCardInfoContext();

  useEffect(() => {
    if (JSON.stringify(cardInfos) !== JSON.stringify(cardInfo)) {
      updateCardInfos(cardInfo);
    }
  }, [cardInfo]);

  return (
    <S.AppContainer>
      <S.CardContainer>
        <Preview
          cardIssuer={cardInfo.cardIssuer}
          cardNumber={cardInfo.cardNumber}
          cardExpirationDate={cardInfo.cardExpirationDate}
        />
        <CardInfoContainer cardInfo={cardInfo} onChange={handleCardInfoChange} error={error} />
        {confirmButtonValidator({ ...cardInfo }) && (
          <CustomLinkButton
            path='register'
            css={css`
              position: fixed;
              bottom: 0;
              left: 0;
              right: 0;
            `}
          />
        )}
      </S.CardContainer>
    </S.AppContainer>
  );
}

export default CardPage;
