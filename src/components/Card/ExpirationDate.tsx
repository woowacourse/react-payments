import styled from "styled-components";
import CardNumber from "./CardNumber";

const Styled = {
  ExpirationDateWrapper: styled.div`
    display: "flex",
    justifyContent: "flex-start",
    height: "20px",
  `,
};

const ExpirationDate = ({ expirationDate }: { expirationDate: string[] }) => {
  return (
    <Styled.ExpirationDateWrapper>
      <CardNumber key="month" number={expirationDate[0]} />
      {expirationDate[1] && <CardNumber key="slash" number="/" />}
      {expirationDate[1] && <CardNumber key="year" number={expirationDate[1]} />}
    </Styled.ExpirationDateWrapper>
  );
};

export default ExpirationDate;
