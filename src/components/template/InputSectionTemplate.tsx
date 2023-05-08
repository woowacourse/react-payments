import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type InputSectionTemplateType = PropsWithChildren<{
  label: string;
  isCountLength?: boolean;
  children: React.ReactNode;
  inputValue?: string;
  maxLength?: number;
  errorMessage?: string;
}>;

const InputSectionTemplate = ({
  label,
  isCountLength,
  children,
  maxLength,
  inputValue,
  errorMessage,
}: InputSectionTemplateType) => {
  return (
    <InputSectionTemplateWrapper>
      <InputAreaWrapper>
        <InputLabelWrapper>
          <p>{label}</p>
          {isCountLength && maxLength && (
            <p>
              {inputValue?.length} / {maxLength}
            </p>
          )}
        </InputLabelWrapper>
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </InputAreaWrapper>
      {errorMessage && <Warning>{errorMessage}</Warning>}
    </InputSectionTemplateWrapper>
  );
};

export default InputSectionTemplate;

const Warning = styled.p`
  color: #ff2f2f;
  font-size: 12px;
  align-self: flex-start;
  margin-top: 5px;
`;

const InputSectionTemplateWrapper = styled.div`
  width: 100%;
  margin-bottom: 19px;
  display: flex;
  flex-direction: column;
`;

const InputAreaWrapper = styled.div`
  flex-direction: row;
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
