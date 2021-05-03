import styled from 'styled-components';
import { COLOR } from './constants/constants';

export const AppWrapper = styled.div`
  display: flex;
  position: relative;
  background-color: ${COLOR.MAIN.WHITE};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 450px;
  height: 820px;
  padding: 20px;
  box-shadow: 1px 1px 1px ${COLOR.KEYBOARD.BORDER};
  margin: 2rem auto;

  .card-wrapper {
    width: 100%;
    height: 180px;
    padding: 0 4rem;
    margin-bottom: 25px;
  }
`;
