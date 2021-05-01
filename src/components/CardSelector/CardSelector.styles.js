import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    padding: 18px;
    transition: background-color 0.3s ease;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;

    &:hover,
    &:active {
      background-color: ${(props) => props.theme.borderColor.default};
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
