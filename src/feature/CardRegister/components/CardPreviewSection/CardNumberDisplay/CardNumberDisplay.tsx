import styled from 'styled-components';
import {MASK_FROM_INDEX, maskCardNumbers} from '../../../domain/cardPolicy';

const CardNumberDisplay = ({cardNumbers}: {cardNumbers: string[]}) => {
  const displayNumbers = maskCardNumbers(cardNumbers);

  return (
    <Container>
      {displayNumbers.map((chunk, index) => {
        if (index >= MASK_FROM_INDEX) {
          return <MaskedChunk key={index}>{chunk}</MaskedChunk>;
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
  font-family: 'Inter', sans-serif;
`;

const Chunk = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  letter-spacing: 2px;
`;

const MaskedChunk = styled(Chunk)`
  font-size: 28px;
  letter-spacing: 1px;
`;

export default CardNumberDisplay;
