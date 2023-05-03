import styled from 'styled-components';
import { COLOR } from '../../constants/card';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 24px;
  height: 24px;

  margin-left: 8px;

  border: 1px solid #969696;
  border-radius: 50%;

  font-size: large;
  font-weight: 700;

  background-color: transparent;

  cursor: pointer;

  &:hover > div,
  &:active > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Tooltip = styled.div`
  display: none;

  position: absolute;
  left: 40px;
  width: 200px;
  height: 100px;

  border: 1px solid #969696;
  border-radius: 8px;

  font-size: medium;
  font-weight: 700;
  text-align: center;
  color: white;

  background-color: ${COLOR.GREY200};
`;
