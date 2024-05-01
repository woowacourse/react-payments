import { css } from '@emotion/react';

const cardContainerStyle = css({
  backgroundColor: '#D5D5D5',
  width: '212px',
  height: '132px',
  borderRadius: '4px',
  boxSizing: 'border-box',
  boxShadow: '3px 3px 5px 0px rgba(0, 0, 0, 0.25)',
  margin: '0 auto',
});

const cardContentBoxStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  position: 'relative',
  top: '84px',
  backgroundColor: '#CBBA64',
  color: '#FFFFFF',
  height: '24px',
  width: '100%',
  paddingRight: '16px',
  boxSizing: 'border-box',
});

interface CardBackImageType {
  cardCvc: string;
}

function CardBackImage({ cardCvc }: CardBackImageType) {
  return (
    <div css={cardContainerStyle}>
      <div css={cardContentBoxStyle}>{cardCvc}</div>
    </div>
  );
}

export default CardBackImage;
