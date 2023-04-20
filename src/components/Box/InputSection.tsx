import React from 'react';
import styled from 'styled-components';

interface InputSectionType {
  label: string;
  isCountLength?: boolean;
  children: React.ReactNode;
  inputValues?: string;
  maxLength?: number;
}

const InputSection = ({
  label,
  isCountLength,
  children,
  maxLength,
  inputValues,
}: InputSectionType) => {
  return (
    <InputSectionWrapper>
      <InputLabelWrapper>
        <p>{label}</p>
        {isCountLength && maxLength && (
          <p>
            {inputValues?.length} / {maxLength}
          </p>
        )}
      </InputLabelWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </InputSectionWrapper>
  );
};

export default InputSection;

const InputSectionWrapper = styled.div`
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
