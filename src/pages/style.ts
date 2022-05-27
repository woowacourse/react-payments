import { css } from '@emotion/react';
import styled from '@emotion/styled';

type FlexDirectionType = 'row' | 'column';

type MarginProps = {
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
};

type FlexProps = {
  flexDirection?: FlexDirectionType;
  justifyContent?: string;
  alignItems?: string;
  alignContent?: string;
};

export const PageWrapper = styled.div(css`
  width: 400px;
  height: 90vh;
  overflow: scroll;
  padding: 20px 30px;
  border: 1px solid black;
  margin: auto;
  margin-top: 20px;
`);

export const TitleWrapper = styled.div(css`
  width: 100%;
  height: 70px;
  display: flex;
  font-size: 1.5rem;
`);

export const MarginWrapper = styled.div((props: MarginProps) => ({
  marginTop: props.marginTop,
  marginRight: props.marginRight,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
}));

export const FlexWrapper = styled.div(
  css`
    display: flex;
  `,
  (props: FlexProps) => ({
    flexDirection: props.flexDirection,
    justifyContent: props.justifyContent,
    alignItems: props.alignItems,
    alignContent: props.alignContent,
  }),
);

export const CardListContainerStyled = styled.div(
  css`
    width: 260px;
    height: 180px;
    padding: 10px 26px;
    background: #f6f6f6;
    overflow-x: hidden;
    margin: auto;
  `,
);

export const CardPaySubTitleStyled = styled.p(
  css`
    font-size: 1rem;
    border-bottom: 2px solid black;
    padding-bottom: 10px;
  `,
);

export const TotalPayStyled = styled.p(
  css`
    font-size: 1.2rem;
    font-weight: 700;
  `,
);

export const TermStyled = styled.p(
  css`
    font-size: 0.8rem;
  `,
);

export const PayButtonStyled = styled.button(
  css`
    width: 148px;
    height: 40px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
  `,
);
