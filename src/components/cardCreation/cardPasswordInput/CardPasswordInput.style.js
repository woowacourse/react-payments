import styled from 'styled-components';

const Styled = {
  InputLabelContainer: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
  `,
  Container: styled.div`
    display: flex;
    align-items: center;
    & > *:not(:last-child) {
      margin-right: 7px;
    }
  `,
  InputContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43px;
    height: 45px;
    background-color: #ecebf1;
    border-radius: 7px;
  `,
  CircleContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 43px;
    height: 45px;
    background-color: transparent;
  `,
};
export default Styled;
