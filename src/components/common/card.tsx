import styled from "styled-components";

export function Card() {
  return (
    <CardContainer>
      <Magnetic />
      <NumberWrapper>
        <NumberItem>1111</NumberItem>
        <NumberItem>1111</NumberItem>
        <NumberItem>1111</NumberItem>
        <NumberItem>1111</NumberItem>
      </NumberWrapper>
      <InfoWrapper>
        <Name>SUN</Name>
        <Date>04/21</Date>
      </InfoWrapper>
    </CardContainer>
  );
}

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;

  width: 21.3rem;
  height: 13.3rem;

  background-color: #333333;
  color: white;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;

  border-radius: 0.5rem;
`;

const Magnetic = styled.div`
  width: 4rem;
  height: 2.6rem;

  margin-top: 4.7rem;
  margin-left: 1.4rem;

  background-color: #cbba64;

  border-radius: 0.4rem;
`;

const NumberWrapper = styled.ul`
  display: flex;
  justify-content: space-around;

  margin: 1.5rem 1rem 0;
`;

const NumberItem = styled.li``;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 1rem 1.5em;
`;

const Name = styled.div``;

const Date = styled.div``;
