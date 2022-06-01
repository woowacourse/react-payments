import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const CardWrapper = styled.div(
  css`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
  `,
  (props: any) => ({ marginRight: props.marginRight, marginBottom: props.marginBottom }),
);
