import {
  StyledContainer,
  StyledTitle,
  StyledSubTitle,
} from "./SectionTitle.css";

type SectionTitleProps = {
  title: string;
  subTitle?: string;
};

function SectionTitle({ title, subTitle }: SectionTitleProps) {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </StyledContainer>
  );
}

export default SectionTitle;
