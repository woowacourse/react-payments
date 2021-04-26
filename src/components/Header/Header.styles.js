import styled from '@emotion/styled';
import { Flex } from '../../styles/mixins';

const Styled = {
  Container: styled.header`
    ${Flex({ items: 'center' })};
  `,

  BackButton: styled.button`
    padding: 0.5em;
    margin: 0.5em;
    background: none;
    border: none;
    cursor: pointer;
    line-height: 2px;
    border-radius: 50%;

    &:hover {
      background-color: #f5f5f5;
    }

    svg {
      transform: translateX(2px);
    }
  `,

  Title: styled.h2`
    font-size: 16px;
    letter-spacing: -0.085em;
    font-weight: 500;
  `,
};

export default Styled;
