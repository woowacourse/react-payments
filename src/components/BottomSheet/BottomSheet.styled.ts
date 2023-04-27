import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const BottomSheet = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 100%;

  background-color: ${COLOR.BLACK};
  opacity: 0.6;
`;

export const BottomSheetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;

  width: 100%;
  height: 30%;

  background-color: ${COLOR.WHITE};
`;
