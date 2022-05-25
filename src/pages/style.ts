import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
  align-items: center;
`);

export const MarginWrapper = styled.div`
  margin-right: 20px;
`;
