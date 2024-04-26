import styled from 'styled-components';

export const CardRegistrationContainer = styled.main`
  padding: 77px 30px;
`;

export const CardPreviewBoxWrapper = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const CardForm = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 45px;
`;

export const SubmitButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.color.primary.main};
  color: #ffffff;
  font-size: ${({ theme }) => theme.fontSize.md};
  text-align: center;
  cursor: pointer;
`;
