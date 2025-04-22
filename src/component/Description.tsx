import styled from "styled-components";

interface DescriptionProps {
  headText: string;
  detailText: string;
}

const Description = ({ headText, detailText }: DescriptionProps) => {
  return (
    <Container>
      <HeaderText>{headText}</HeaderText>
      {detailText.length !== 0 && <DetailText>{detailText}</DetailText>}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const HeaderText = styled.span`
  font-size: var(--font-size-header);
  font-weight: var(--font-weight-header);
  color: var(--color-black);
`;

const DetailText = styled.span`
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-caption);
  color: var(--color-gray);
`;

export default Description;
