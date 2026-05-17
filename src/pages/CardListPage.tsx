import CardListEmpty from "@/components/CardList/CardListEmpty/CardListEmpty";
import PageLayout from "@/components/common/PageLayout";
import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

const CardListPage = () => {
  return (
    <PageLayout>
      <PageWrapper>
        <PageTitle>보유 카드</PageTitle>
        <CardListEmpty />
      </PageWrapper>
    </PageLayout>
  );
};

const PageWrapper = styled.div`
  padding: 2.5rem 1.75rem;
`;

const PageTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${COLOR_PALETTE["BLACK-700"]};
`;

export default CardListPage;
