import { ReactNode } from 'react';
import * as Styled from './NewCardInputSection.styles';

export interface NewCardInputSectionProps {
  label: string;
  mainText: string;
  subText?: string;
  errorMessage: string[];
  children: ReactNode;
}

const NewCardInputSection = ({
  label,
  mainText,
  subText,
  errorMessage,
  children,
}: NewCardInputSectionProps) => {
  return (
    <Styled.InputSection>
      <header>
        <Styled.MainText>{mainText}</Styled.MainText>
        <Styled.Subtext>{subText}</Styled.Subtext>
      </header>
      <article>
        <Styled.Form>
          <Styled.Label>{label}</Styled.Label>
          <Styled.InputWrapper>{children}</Styled.InputWrapper>
        </Styled.Form>
        <Styled.ErrorText>
          {errorMessage && errorMessage.find((item) => item !== '')}
        </Styled.ErrorText>
      </article>
    </Styled.InputSection>
  );
};

export default NewCardInputSection;
