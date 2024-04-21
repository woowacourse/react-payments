import CardNumber from "./CardNumber";

const ExpirationDate = ({ expirationDate }: { expirationDate: string[] }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        height: "20px",
      }}
    >
      <CardNumber key="month" number={expirationDate[0]} />
      {expirationDate[1] && <CardNumber key="slash" number="/" />}
      {expirationDate[1] && <CardNumber key="year" number={expirationDate[1]} />}
    </div>
  );
};

export default ExpirationDate;
