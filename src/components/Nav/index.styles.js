import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../constants/style';

export const NavWrapper = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 1.25rem;

  display: flex;
  align-items: center;
  font-size: ${FONT_SIZE.NORMAL};
`;

export const BackButton = styled.div`
  width: 0.7rem;
  height: 0.7rem;
  margin: 0 0.5rem 0 0.2rem;
  border: 2.5px solid ${COLOR.MAIN.GLOBAL_FONT};
  border-top: 0;
  border-right: 0;
  box-sizing: border-box;
  transform: rotate(45deg);
`;

export const NavText = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 0.7rem;
  letter-spacing: -0.085rem;
  display: flex;
  align-items: center;
`;
