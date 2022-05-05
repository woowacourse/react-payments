import styled from "styled-components";
import CardAddLink from "../../component/CardAddLink/CardAddLink.component";
import Header from "../../component/common/Header/Header.component";
import PageContainer from "../../component/common/PageContainer/PageContainer.component";
import PageTitle from "../../component/common/PageTitle/pageTitle.component";
import SavedCardList from "../../component/SavedCardList/SavedCardList.component";

const CardGroup = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Header>
        <PageTitle type="header">보유 카드</PageTitle>
      </Header>
      <CardGroup>
        <SavedCardList />
        <CardAddLink to="/add">+</CardAddLink>
      </CardGroup>
    </PageContainer>
  );
};

export default HomePage;
