import styled from "styled-components";
import {
  CARD_NUMBER_MASK_CHAR,
  CARD_NUMBER_MASK_START_INDEX,
  type CardNumber,
} from "../../../../../domain/card/cardNumber";

const checkMaskCardNumberChunk = (index: number) => {
  return index >= CARD_NUMBER_MASK_START_INDEX;
};

const maskCardNumberChunk = (chunk: string) => {
  return CARD_NUMBER_MASK_CHAR.repeat(chunk.length);
};

const CardNumberDisplay = ({
  cardNumbers,
}: {
  cardNumbers: CardNumber;
}) => {
  return (
    <Container>
      {cardNumbers.map((chunk, index) => {
        if (checkMaskCardNumberChunk(index)) {
          return (
            <MaskedChunk key={index}>{maskCardNumberChunk(chunk)}</MaskedChunk>
          );
        }
        return <Chunk key={index}>{chunk}</Chunk>;
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  height: 25px;
  font-family: "Inter", sans-serif;
`;

const Chunk = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 38px;
  letter-spacing: 2px;
`;

const MaskedChunk = styled(Chunk)`
  font-size: 28px;
  letter-spacing: 1px;
`;

export default CardNumberDisplay;
