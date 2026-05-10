import styled from "@emotion/styled";

export default function SendButton() {
  return (
    <Wrapper>
      <Button>확인</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  margin: 0 -20px -20px -20px;
  position: sticky;
  bottom: -20px;
  order: 999;
  margin-top: auto;
  z-index: 10;
`;

const Button = styled.button`
  padding: 20px;
  background-color: black;
  color: white;
  width: 100%;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
`;
