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
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: stretch;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 100%;
  padding: 2.1rem 3rem 2.8rem;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem 0.5rem 0 0;
`;
