import styled from 'styled-components';

interface DescriptionProps {
  headText: string;
  detailText?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const HeaderText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.header};
  font-weight: ${({ theme }) => theme.fontWeights.header};
  color: ${({ theme }) => theme.colors.black};
`;

const DetailText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.caption};
  color: ${({ theme }) => theme.colors.gray};
`;

const Description = ({ headText, detailText }: DescriptionProps) => {
  return (
    <Container>
      <HeaderText>{headText}</HeaderText>
      <DetailText>{detailText}</DetailText>
    </Container>
  );
};

export default Description;
