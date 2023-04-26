import styled from 'styled-components';
import { COLOR } from '../../../constants/cardInfo';

export const CardRegisterPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const CardRegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 70%;
`;

export const CardInfoSubmitButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  height: 40px;
`;

export const CardInfoSubmitButton = styled.button`
  position: relative;

  width: 50px;

  font-size: large;
  font-weight: 700;

  cursor: pointer;

  &:focus {
    outline: solid ${COLOR.BLUE};
  }
`;
