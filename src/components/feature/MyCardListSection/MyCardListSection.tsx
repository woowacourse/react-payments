import useCards from "@hooks/feature/query/useCards";
import CardItem from "@components/common/CardItem";
import styled from "@emotion/styled";

import MyCardListSectionLoader from "./MyCardListSectionLoader";

const MyCardListSection = () => {
  const { data, error, state } = useCards();

  if (state === "loading") {
    return <MyCardListSectionLoader />;
  }

  if (state === "error" || !data) {
    return (
      <div>카드 정보를 불러오는 중 오류가 발생했습니다: {error?.message}</div>
    );
  }

  return (
    <Wrapper>
      <Header>보유 카드</Header>
      <CardContainer>
        {data.map((props) => (
          <CardItem {...props} key={props.id} />
        ))}
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
`;

const CardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
`;

export default MyCardListSection;
