import { ReactNode } from "react";
import * as Styled from "./NewCardInputSection.styled";

export interface NewCardInputSectionProps {
  mainText: string;
  subText: string;
  label: string;
  errorMessage: string[];
  children: ReactNode;
}

const NewCardInputSection = ({ mainText, subText, label, errorMessage, children }: NewCardInputSectionProps) => {
  return (
    <Styled.InputSection>
      <fieldset>
        <legend>
          <Styled.MainText>{mainText}</Styled.MainText>
          <Styled.Subtext>{subText}</Styled.Subtext>
        </legend>
        <Styled.Form>
          <Styled.Label>{label}</Styled.Label>
          <Styled.InputWrapper>{children}</Styled.InputWrapper>
        </Styled.Form>
        <Styled.ErrorText>{errorMessage && errorMessage.find((item) => item !== "")}</Styled.ErrorText>
      </fieldset>
    </Styled.InputSection>
  );
};

export default NewCardInputSection;
