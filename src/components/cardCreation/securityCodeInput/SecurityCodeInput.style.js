import styled from 'styled-components';

const Styled = {
  InputLabelContainer: styled.div`
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
    color: #525252;
  `,
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  InputContainer: styled.div`
    display: flex;
    align-items: center;
    background-color: #ecebf1;
    border-radius: 7px;
    width: 84px;
    margin-right: 11px;
    border: ${({ validColor }) => (validColor ? `1px solid ${validColor}` : 'none')};
  `,
};

export default Styled;
