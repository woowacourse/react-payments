import { CardContainerStyle } from './CardFrontImage';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
const CardBackImage = ({ cvc }: { cvc: string }) => {
  return (
    <CardBackContainerStyle color="#D5D5D5">
      <div css={cardStripeStyle}>
        <p>{cvc}</p>
      </div>
    </CardBackContainerStyle>
  );
};

const CardBackContainerStyle = styled(CardContainerStyle)`
  padding: 0;
`;

const cardStripeStyle = css`
  position: relative;
  top: 84px;
  width: 212px;
  height: 24px;
  top: 84px;
  background-color: #cbba64;
  padding-right: 16px;
  box-sizing: border-box;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-align: right;
  color: #ffffff;
`;

export default CardBackImage;
