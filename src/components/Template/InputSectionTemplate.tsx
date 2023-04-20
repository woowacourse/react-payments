import React from 'react';
import styled from 'styled-components';

interface InputSectionTemplateType {
  label: string;
  isCountLength?: boolean;
  children: React.ReactNode;
  inputValues?: string;
  maxLength?: number;
}

const InputSectionTemplate = ({
  label,
  isCountLength,
  children,
  maxLength,
  inputValues,
}: InputSectionTemplateType) => {
  return (
    <InputSectionTemplateWrapper>
      <InputLabelWrapper>
        <p>{label}</p>
        {isCountLength && maxLength && (
          <p>
            {inputValues?.length} / {maxLength}
          </p>
        )}
      </InputLabelWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </InputSectionTemplateWrapper>
  );
};

export default InputSectionTemplate;

const InputSectionTemplateWrapper = styled.div`
  width: 100%;
  margin-bottom: 19px;
  display: flex;
  flex-direction: column;
`;

const InputLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  color: #525252;
  font-size: 12px;
  letter-spacing: -0.085em;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-of-type) {
    margin-right: 10px;
  }
`;
