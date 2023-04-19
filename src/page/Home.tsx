import { CardList } from "../components/CardList";
import { Header } from "../components/common/Header";

const mockData = [
  {
    numbers: "1234-1234-1243-1234",
    owner: "DAHYE YUN",
    expiryDate: "12/25",
    color: "#525252",
    CVC: 123,
    password: [1, 2],
  },
  {
    numbers: "1111-2222-3333-4444",
    owner: "ABC",
    expiryDate: "11/11",
    color: "#BA55D3",
    CVC: 123,
    password: [1, 2],
  },
];

export const pushData = (data: any) => {
  mockData.push(data);
};

export const Home = () => {
  return (
    <>
      <Header text="보유카드" />
      <CardList cards={mockData} />
    </>
  );
};
