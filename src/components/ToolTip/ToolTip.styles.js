import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    position: relative;
    width: 100%;
  `,

  Text: styled.div`
    visibility: hidden;
    position: absolute;
    left: 37px;
    top: -3px;
    font-size: 12px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    padding: 0.6em 1em;
    color: white;
    transition: opacity 0.2s ease;
    opacity: 0;

    &::after {
      content: '';
      position: absolute;
      top: 11px;
      left: -5px;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent #555 transparent transparent;
    }
  `,

  Button: styled.button`
    border-radius: 50%;
    border: 1px solid ${(props) => props.theme.color.button};
    color: ${(props) => props.theme.color.button};
    background-color: #ffffff;
    font-size: 20px;
    width: 27px;
    height: 27px;
    padding: 0;
    line-height: 27px;
    text-align: center;
    cursor: pointer;

    &:focus + div {
      visibility: visible;
      opacity: 1;
    }
  `,
};

export default Styled;
