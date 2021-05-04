import styled from '@emotion/styled';

const Styled = {
  Container: styled.button`
    font-family: inherit;
    font-size: 14px;
    font-weight: bold;
    padding: 0.8rem 1.2rem;
    background: none;
    border: none;
    border-radius: 7px;
    color: ${(props) => props.theme.color.button};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.hoverColor.button};
    }
  `,
};

export default Styled;
