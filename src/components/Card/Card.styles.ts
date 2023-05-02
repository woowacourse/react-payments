import styled from 'styled-components';

export const CardWrapper = styled.div<{ cardColor?: string }>`
  display: flex;
  align-items: center;
  width: 224px;
  padding: 12px;
  background: ${(props) => props.cardColor || '#333'};
  color: ${(props) => props.cardColor !== '#FFE600' && '#fff'};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font: ${(props) => props.theme.font.subtitle};
  margin-bottom: 12px;
`;

export const ChipWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
`;

export const CardCompany = styled.p`
  height: 36px;
`;

export const Chip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;

export const CardText = styled.p`
  display: inline-block;
  height: 20px;
  margin: 8px 8px 0 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
