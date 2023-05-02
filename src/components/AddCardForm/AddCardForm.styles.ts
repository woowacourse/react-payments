import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0;
  cursor: pointer;

  & > p {
    font: ${(props) => props.theme.font.body};
    color: ${(props) => props.theme.color.grey300};
    margin-bottom: 4px;
  }
`;

export const NextButton = styled.button<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? '#969696' : '#000')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
