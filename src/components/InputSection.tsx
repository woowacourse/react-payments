import React from 'react';
import styled from 'styled-components';

interface InputSectionType {
  label: string;
  isCountLength?: boolean;
  children: React.ReactNode;
}

const InputSection = ({ label, isCountLength, children }: InputSectionType) => {
  return (
    <InputSectionWrapper>
      <InputLabelWrapper>
        <p>{label}</p>
        {isCountLength && <p>0/30</p>}
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
  & > *:not(:last-of-type) {
    margin-right: 10px;
  }
`;
