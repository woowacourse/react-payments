import Input from ".";
import styled from "styled-components";

const ExpiredDateInput = (props) => {
  return (
    <Container>
      <Input type="text" width="65" textAlign="right" placeholder={"MM"} />
      <SlashContainer>/</SlashContainer>
      <Input type="text" width="65" textAlign="left" placeholder={"YY"} />
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: #ecebf1;
  border-radius: 7px;
`;

const SlashContainer = styled.span`
  width: 19px;
  height: 27px;
  text-align: center;
  margin: 0 2px;
`;

export default ExpiredDateInput;
