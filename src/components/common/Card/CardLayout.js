import styled from 'styled-components';

export const CardLayout = ({
  size,
  backgroundColor,
  onClickCard,
  children,
}) => {
  return (
    <Style.CardBox>
      <Style.Card
        size={size}
        backgroundColor={backgroundColor}
        onClick={onClickCard}
      >
        {children}
      </Style.Card>
    </Style.CardBox>
  );
};

const CardLayoutSize = {
  lg: {
    width: 293,
    height: 183,
  },
  md: {
    width: 213,
    height: 133,
  },
  sm: {
    width: 208,
    height: 130,
  },
};

const Style = {
  CardBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Card: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: ${({ size }) =>
      CardLayoutSize[size]?.width || CardLayoutSize.md.width}px;
    height: ${({ size }) =>
      CardLayoutSize[size]?.height || CardLayoutSize.md.height}px;

    background: ${(props) => props.backgroundColor || '#E5E5E5'};

    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    border-radius: 5px;
    cursor: pointer;
  `,
};
