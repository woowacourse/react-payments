import styled from '@emotion/styled';

const Styled = {
  Container: styled.button`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    transition: background-color 0.3s ease;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    background: none;
    border: none;

    &:hover,
    &:active {
      background-color: ${(props) => props.theme.hoverColor.button};
    }
  `,
  Logo: styled.img`
    width: 37px;
    height: 37px;
    object-fit: contain;
    border-radius: 50%;
    margin-bottom: 10px;
    pointer-events: none;
  `,
  Title: styled.span`
    font-size: 12px;
    letter-spacing: -0.085em;
    pointer-events: none;
  `,
};

export default Styled;
