import styled from 'styled-components';

type SectionTitleProps = {
  title: string;
  subTitle?: string;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const StyledTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

const StyledSubTitle = styled.p`
  font-size: 9.5px;
  font-weight: 400;
  color: #8b95a1;
  margin: 0;
`;

function SectionTitle({ title, subTitle }: SectionTitleProps) {
  return (
    <StyledContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
    </StyledContainer>
  );
}

export default SectionTitle;
