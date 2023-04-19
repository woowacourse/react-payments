import AddCardButton from "../../components/AddCardButton/AddCardButton";
import AppBar from "../../components/AppBar/AppBar";
import CardList from "../../components/CardLIst/CardList";
import { Container } from "../../components/common";

const CardListPage = () => {
  return (
    <Container>
      <AppBar title="보유카드" />
      <CardList
        cards={[
          {
            cardNumber: {
              firstGroup: "1234",
              secondGroup: "1234",
              thirdGroup: "1234",
              fourthGroup: "1234",
            },

            expirationDate: {
              month: "12",
              year: "12",
            },

            ownerName: "aaa",
            securityCode: "111",
            password: "12",
          },
        ]}
      />
      <span>새로운 카드를 등록해주세요.</span>
      <AddCardButton />
    </Container>
  );
};

export default CardListPage;
