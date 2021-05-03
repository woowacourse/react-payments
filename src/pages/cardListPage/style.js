import styled from 'styled-components';
import { COLOR } from '../../constants';

const Styled = {
  Message: styled.div`
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  `,
  Container: styled.div`
    margin-top: 65px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin-bottom: 40px;
    }
  `,
  CardContainer: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  CardNickname: styled.div`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;
    color: ${COLOR.DARK_GRAY};
  `,
  ButtonContainer: styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  `,
  EditButton: styled.div`
    cursor: pointer;
  `,
  DeleteButton: styled.div`
    cursor: pointer;
  `,
};

export default Styled;
