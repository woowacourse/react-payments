import CardItem from "@components/common/CardItem";
import styled from "@emotion/styled";

const MyCardListSection = () => {
  const mock = [
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      issuerCode: "31",
      number: "551112******9012",
      expirationDate: "12/28",
    },
    {
      id: "550e8400-e29b-41d4-a716-446655440000",
      issuerCode: "31",
      number: "551112******9012",
      expirationDate: "12/28",
    },
  ];

  return (
    <Wrapper>
      <Header>보유 카드</Header>
      <CardContainer>
        {mock.map((props) => (
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
