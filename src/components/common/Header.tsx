import styled from "styled-components";

interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  height: 65px;

  padding: 20px 36px;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
