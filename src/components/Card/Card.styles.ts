import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 212px;
  height: 132px;
  padding: 12px;
  background: #333333;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 32px;
`;

export const ChipWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const Chip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;

export const CardText = styled.span`
  display: inline-block;
  color: #ffffff;
  margin: 8px 8px 0 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
