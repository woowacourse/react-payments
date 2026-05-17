import styled from '@emotion/styled';
import SectionTitle from '../Common/SectionTitle/SectionTitle';
import HintText from '../Common/HintText/HintText';

export default function InputFieldLayout({
  sectionTitle,
  hintText,
  children,
}: {
  sectionTitle: React.ReactNode;
  hintText?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Header>
        <SectionTitle>{sectionTitle}</SectionTitle>
        <HintText>{hintText}</HintText>
      </Header>
      <ContentWrapper>{children}</ContentWrapper>
    </Layout>
  );
}

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
