import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  label: string;
  countLength?: number;
  maxLength?: number;
}

const InputSectionTemplate = ({ children, label, countLength, maxLength }: Props) => {
  return (
    <InputSectionTemplateWrapper>
      <InputLabelWrapper>
        <p>{label}</p>
        {countLength && maxLength && (
          <p>
            {countLength} / {maxLength}
          </p>
        )}
      </InputLabelWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </InputSectionTemplateWrapper>
  );
};

export default InputSectionTemplate;

const InputSectionTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-bottom: 19px;
`;

const InputLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 5px;

  letter-spacing: -0.085em;
  font-size: 12px;
  color: #525252;
`;

const ChildrenWrapper = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-of-type) {
    margin-right: 10px;
  }
`;
