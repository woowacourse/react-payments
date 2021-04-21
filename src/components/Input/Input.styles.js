import styled from '@emotion/styled';

const Styled = {
  Container: styled.div`
    width: ${(props) => props.width};
    font-size: 16px;
    letter-spacing: -0.085em;
    color: ${(props) => props.theme.color.label};
  `,

  Label: styled.label`
    font-size: 12px;
    display: flex;
    flex-direction: column;
  `,

  Header: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;
  `,

  Input: styled.input`
    text-align: ${(props) => props.textAlign};
    padding: 12px;
    background-color: #ecebf1;
    border-radius: 7px;
    border: none;
  `,
};

export default Styled;
