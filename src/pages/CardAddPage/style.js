import styled from 'styled-components';

export const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 158px;
  padding-top: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 25px 28px 16px;
  gap: 15px;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: ${props => props.alignItems};
  gap: ${props => props.gap};
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
