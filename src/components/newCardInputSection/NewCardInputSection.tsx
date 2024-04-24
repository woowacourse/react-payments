import React from 'react';
import * as Styled from './NewCardInputSection.styled';

export interface NewCardInputSectionProps {
  label: string;
  mainText: string;
  subText?: string;
  errorMessage?: string[];
}

const NewCardInputSection = ({
  label,
  mainText,
  subText,
  errorMessage,
  children,
}: React.PropsWithChildren<NewCardInputSectionProps>) => {
  return (
    <Styled.InputSection>
      <div>
        <Styled.MainText>{mainText}</Styled.MainText>
        <Styled.Subtext>{subText}</Styled.Subtext>
      </div>
      <Styled.Form>
        <Styled.Label>{label}</Styled.Label>
        <Styled.InputWrapper>{children}</Styled.InputWrapper>
        <Styled.ErrorText>
          {errorMessage && errorMessage.find((item) => item !== '')}
        </Styled.ErrorText>
      </Styled.Form>
    </Styled.InputSection>
  );
};

export default NewCardInputSection;
