import styled from "styled-components";
import CardNumber from "./CardNumber";

const Styled = {
  ExpirationDateLayout: styled.div`
    display: flex;
    justifycontent: flex-start;
    height: 20px;
  `,
};

const ExpirationDate = ({ expirationDate }: { expirationDate: string[] }) => {
  return (
    <Styled.ExpirationDateLayout>
      <CardNumber key="month" number={expirationDate[0]} />
      {expirationDate[1] && <CardNumber key="slash" number="/" />}
      {expirationDate[1] && <CardNumber key="year" number={expirationDate[1]} />}
    </Styled.ExpirationDateLayout>
  );
};

export default ExpirationDate;
