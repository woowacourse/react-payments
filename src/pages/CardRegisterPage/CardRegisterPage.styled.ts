import styled from 'styled-components';

export const CardRegisterPage = styled.div`
  height: 100%;
`;

export const CardRegisterForm = styled.form`
  & > div {
    margin-bottom: 32px;
  }
`;

export const CardInfoSubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CardInfoSubmitButton = styled.button`
  font-size: 16px;
  font-weight: 900;

  &:focus {
    padding: 10px 20px;
  }
`;
