import Preview from '../../widgets/preview/ui/Preview';
import { CardInfoContainer } from '../../features/cardInfo/ui';
import * as S from './CardPage.styles';
import { confirmButtonValidator } from '../../features/cardInfo/validation/cardInfoValidator';
import { css } from '@emotion/react';
import CustomLinkButton from '../../shared/ui/CustomLinkButton';
import { ROUTES } from '../../shared/constants/routeConstants';

function CardPage() {
  return (
    <S.AppContainer>
      <S.CardContainer>
        <Preview />
        <CardInfoContainer />
        {confirmButtonValidator() && (
          <CustomLinkButton
            path={ROUTES.REGISTER}
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
