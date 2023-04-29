import styled from "styled-components";
import { BCIc } from "../assets";
import { bank } from "../core/bank";
import { BankItem } from "./bankItem";

export function BankMenu() {
  return (
    <Container>
      {bank.map((item) => {
        return (
          <BankItem key={item.id} logo={item.logo} logoName={item.logoName} />
        );
      })}
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
