import styled from 'styled-components';

export const Wrapper = styled.div<{ background: string }>`
  width: 212px;
  height: 132px;
  padding: 12px;
  background: ${(props) => props.background || '#ffffff'};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-size: 14px;
  overflow: hidden;
  cursor: pointer;
`;

export const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Chip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
  margin-top: 8px;
`;

export const TextWrapper = styled.div`
  width: 188px;
  display: flex;
  justify-content: space-between;
`;

export const CardText = styled.p<{ cardName?: boolean }>`
  width: ${(props) => (props.cardName ? '120px' : '')};
  height: ${(props) => (props.cardName ? '32px' : '')};
  color: #ffffff;
  margin: 8px 8px 0 0;
  word-break: break-all;

  &:last-child {
    margin-right: 0;
  }
`;
