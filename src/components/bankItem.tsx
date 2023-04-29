import styled from "styled-components";

interface BankItemProps {
  logo: () => JSX.Element;
  logoName: string;
}

export function BankItem(props: BankItemProps) {
  const { logo, logoName } = props;

  return (
    <Wrapper>
      {logo()}
      <strong>{logoName}</strong>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
