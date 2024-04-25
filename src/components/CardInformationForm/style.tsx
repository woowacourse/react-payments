import styled from 'styled-components';

export const StyledCardInformationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  overflow: auto;

  width: 100%;
  height: 40rem;
  max-height: 40rem;
`;

export const StyledSubmitButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 5.2rem;

  background-color: ${(props) => props.theme.color.darkGray};

  ${(props) => props.theme.typography.submitButton}
  color: ${(props) => props.theme.color.white};
`;
