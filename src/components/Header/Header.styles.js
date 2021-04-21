import styled from '@emotion/styled';

const Styled = {
  Container: styled.header`
    display: flex;
    align-items: center;
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
