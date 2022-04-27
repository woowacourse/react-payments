import Input from ".";
import styled from "styled-components";

const CardNumberInput = (props) => {
  return (
    <Container>
      <Input width="96" textAlign="right" value={1234} />
      <DashContainer>-</DashContainer>
      <Input width="45" value={5678} />
      <DashContainer>-</DashContainer>
      <Input width="45" value={1234} />
      <DashContainer>-</DashContainer>
      <Input width="96" textAlign="left" value={1234} />
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #ecebf1;
  border-radius: 7px;
`;

const DashContainer = styled.span`
  width: 10px;
  height: 45px;
  margin: 0 10px;
  color: #111;
`;

export default CardNumberInput;
