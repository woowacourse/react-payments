import * as S from 'styles.js';

export default function Card({
  cardNumber,
  cardOwner,
  cardExpiration,
  cardName,
  cardColor,
  isSmall,
}) {
  const cardExpirationContent = () =>
    cardExpiration[0] || cardExpiration[1] ? cardExpiration.join('/') : 'MM/YY';

  return (
    <S.Card color={cardColor} isSmall={isSmall}>
      <S.CardTop>
        <S.CardText isSmall={isSmall}>{cardName}</S.CardText>
      </S.CardTop>
      <S.CardMiddle>
        <S.SmallCardChip isSmall={isSmall}></S.SmallCardChip>
      </S.CardMiddle>
      <S.CardBottom>
        <S.CardBottomNumber isSmall={isSmall}>
          <S.CardText isSmall={isSmall}>{cardNumber[0]}</S.CardText>
          <S.CardText isSmall={isSmall}>{cardNumber[1]}</S.CardText>
          <S.CardText isSmall={isSmall}>{'•'.repeat(cardNumber[2].length)}</S.CardText>
          <S.CardText isSmall={isSmall}>{'•'.repeat(cardNumber[3].length)}</S.CardText>
        </S.CardBottomNumber>
        <S.CardBottomInfo>
          <S.CardTextEllipsis>{cardOwner || 'NAME'}</S.CardTextEllipsis>
          <S.CardText isSmall={isSmall}>{cardExpirationContent()}</S.CardText>
        </S.CardBottomInfo>
      </S.CardBottom>
    </S.Card>
  );
}
