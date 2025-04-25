import { css } from '@emotion/react';
import { useCardInfoContext } from '../../app/context/cardInfo/CardInfoProvider';
import CustomLinkButton from '../../shared/ui/CustomLinkButton';
``;
import * as S from './RegisterPage.styles';

export default function RegisterPage() {
  const { cardInfos } = useCardInfoContext();

  return (
    <S.RegisterPageContainer>
      <S.RegisterImageContainer>
        <S.RegisterCircle>
          <img src='./complete.svg' alt='complete' />
        </S.RegisterCircle>
      </S.RegisterImageContainer>
      <S.RegisterMainContainer>
        <span>{cardInfos.cardNumber[0]}로 시작하는</span>
        <span>{cardInfos.cardIssuer}가 등록되었어요.</span>
      </S.RegisterMainContainer>
      <CustomLinkButton
        path=''
        css={css`
          width: 80%;
          margin: 50px 0;
          border-radius: 5px;
        `}
      />
    </S.RegisterPageContainer>
  );
}
