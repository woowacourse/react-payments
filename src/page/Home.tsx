import { CardList } from "../components/CardList";

const mockData = [
  {
    numbers: "1234-1234-1243-1234",
    owner: "DAHYE YUN",
    expiryDate: "12/25",
    color: "#525252",
  },
  {
    numbers: "1111-2222-3333-4444",
    owner: "ABC",
    expiryDate: "11/11",
    color: "#BA55D3",
  },
];

export const Home = () => {
  return (
    <>
      <CardList cards={mockData} />
    </>
  );
};
