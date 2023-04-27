import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 192px;
  margin-top: 24px;
  font-size: 14px;
`;

export const CardLabelWrapper = styled.div`
  height: 20px;
`;

export const NextButton = styled.button<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? '#969696' : '#000')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
