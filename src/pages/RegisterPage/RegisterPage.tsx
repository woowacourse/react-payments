import { css } from '@emotion/react';
import CustomLinkButton from '../../shared/ui/CustomLinkButton';
import * as S from './RegisterPage.styles';
import { useCardInfoContext } from '../../features/cardInfo/context/CardInfoContext';
import { ROUTES } from '../../shared/constants/routeConstants';

export default function RegisterPage() {
  const { cardInfo } = useCardInfoContext();

  return (
    <>
      <S.RegisterImageContainer>
        <S.RegisterCircle>
          <img src='./complete.svg' alt='complete' />
        </S.RegisterCircle>
      </S.RegisterImageContainer>
      <S.RegisterMainContainer>
        <span>{cardInfo.cardNumber[0]}로 시작하는</span>
        <span>{cardInfo.cardIssuer}가 등록되었어요.</span>
      </S.RegisterMainContainer>
      <CustomLinkButton
        path={ROUTES.CARD}
        css={css`
          width: 80%;
          margin: 50px 0;
          border-radius: 5px;
        `}
      />
    </>
  );
}
