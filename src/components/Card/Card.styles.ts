import styled from 'styled-components';

export const Wrapper = styled.div<{ background: string }>`
  display: flex;
  align-items: end;
  width: 212px;
  height: 132px;
  padding: 12px;
  background: ${(props) => props.background || '#333333'};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-size: 14px;
  margin-bottom: 32px;
`;

export const ChipWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Chip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;

export const CardText = styled.p<{ cardName?: boolean }>`
  width: ${(props) => (props.cardName ? '120px' : '')};
  height: ${(props) => (props.cardName ? '32px' : '')};
  color: #ffffff;
  margin: 8px 8px 0 0;
  word-break: break-all;
`;
