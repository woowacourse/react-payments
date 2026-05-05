import styled from "styled-components";
import type { CardNumberChunkType } from "../../../../../common/types/CardInfoType";
import {
  CARD_NUMBER_MASK_CHAR,
  CARD_NUMBER_MASK_START_INDEX,
} from "../../../constants";

const CardNumberDisplay = ({
  cardNumbers,
}: {
  cardNumbers: CardNumberChunkType;
}) => {
  return (
    <Container>
      {cardNumbers.map((chunk, index) => {
        if (index >= CARD_NUMBER_MASK_START_INDEX) {
          return (
            <MaskedChunk key={index}>
              {CARD_NUMBER_MASK_CHAR.repeat(chunk.length)}
            </MaskedChunk>
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
