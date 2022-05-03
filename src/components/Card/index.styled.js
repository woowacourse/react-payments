import styled from 'styled-components';
import { COLOR_TYPE } from '../../constant';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px 0;
`;

export const EmptyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 130px;

  font-size: 30px;
  color: #575757;

  background: ${({ color }) => COLOR_TYPE[color]};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;
`;

export const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

export const CardName = styled.span`
  font-size: 16px;
  margin-left: 14px;
`;

export const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;

  display: flex;
  align-items: center;
`;

export const CardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 100px;

  background: #cbba64;
  border-radius: 4px;
`;

export const CardNumbers = styled.div`
  display: flex;
  position: absolute;
  font-size: 16px;
  bottom: 30px;

  & > span {
    margin-right: 10px;
  }

  &::last-child {
    margin-right: 0;
  }
`;

export const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardOwnerContainer = styled.span`
  width: 160px;
  margin: 0 16px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const CardExpiredDateContainer = styled.span`
  margin-right: 5px;
  width: 80px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
`;
