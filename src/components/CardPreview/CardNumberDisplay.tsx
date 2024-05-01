import styled from "styled-components";
import CardText from "./CardText";

interface CardNumberDisplayProps {
  cardNumbers: string[];
}

const CardNumberDisplay = ({ cardNumbers }: CardNumberDisplayProps) => {
  const [first, second, third, fourth] = cardNumbers;

  return (
    <CardTextContainer>
      <CardText text={first} type="text" />
      <CardText text={second} type="text" />
      <CardText text={third} type="password" />
      <CardText text={fourth} type="password" />
    </CardTextContainer>
  );
};

export default CardNumberDisplay;

const CardTextContainer = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
`;
