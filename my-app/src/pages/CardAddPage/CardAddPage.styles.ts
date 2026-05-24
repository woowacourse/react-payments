import styled from '@emotion/styled';

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-bottom: 150px;
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SubmitButton = styled.button`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: #333333;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-radius: 2px;
  z-index: 100;
`;
