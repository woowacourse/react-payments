import styled from 'styled-components';
import CardBox from 'common/CardBox/CardBox';

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
    <CardBox color={cardColor} isSmall={isSmall}>
      <Styled.CardTop>
        <Styled.CardText isSmall={isSmall}>{cardName}</Styled.CardText>
      </Styled.CardTop>

      <Styled.CardMiddle>
        <Styled.SmallCardChip isSmall={isSmall}></Styled.SmallCardChip>
      </Styled.CardMiddle>

      <Styled.CardBottom>
        <Styled.CardBottomNumber isSmall={isSmall}>
          <Styled.CardText isSmall={isSmall}>{cardNumber[0]}</Styled.CardText>
          <Styled.CardText isSmall={isSmall}>{cardNumber[1]}</Styled.CardText>
          <Styled.CardText isSmall={isSmall}>{'•'.repeat(cardNumber[2].length)}</Styled.CardText>
          <Styled.CardText isSmall={isSmall}>{'•'.repeat(cardNumber[3].length)}</Styled.CardText>
        </Styled.CardBottomNumber>
        <Styled.CardBottomInfo>
          <Styled.CardTextEllipsis>{cardOwner || 'NAME'}</Styled.CardTextEllipsis>
          <Styled.CardText isSmall={isSmall}>{cardExpirationContent()}</Styled.CardText>
        </Styled.CardBottomInfo>
      </Styled.CardBottom>
    </CardBox>
  );
}

const Styled = {
  CardTop: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
  `,

  CardMiddle: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    margin-left: 30px;
  `,

  CardBottom: styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
  `,

  CardText: styled.span`
    line-height: 16px;
    vertical-align: middle;
    font-weight: 400;
    display: inline-block;
    margin-top: 0;
    margin-bottom: 0;
    ${({ isSmall }) => `
      margin-left: ${isSmall ? '10px' : '14px'};
      margin-right: ${isSmall ? '10px' : '14px'};
    `}
  `,

  SmallCardChip: styled.div`
    ${({ isSmall }) => `
      width: ${isSmall ? '40px' : '60px'}; 
      height: ${isSmall ? '26px' : '40px'}; 

      background: #cbba64;
      border-radius: 4px;
    `}
  `,

  CardBottomNumber: styled.div`
    ${({ isSmall }) => `
    margin-bottom: ${isSmall ? '10px' : '14px'};
  `}
  `,

  CardBottomInfo: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `,

  CardTextEllipsis: styled.span`
    ${({ isSmall }) => `
      line-height: 16px;
      vertical-align: middle;
      font-weight: 400;
      display: inline-block;
      margin-top: 0;
      margin-bottom: 0;
      margin-left: ${isSmall ? '10px' : '14px'};
      margin-right: ${isSmall ? '10px' : '14px'};
      text-align: left;
      width: 220px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    `}
  `,
};
