import styled from 'styled-components';

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputFieldContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
`;

const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  text-align: left;
  color: black;
`;

const ErrorMessage = styled.div`
  height: 12px;
  color: #ff3d3d;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
`;

export { FormSection, InputFieldContainer, InputForm, Label, ErrorMessage };
