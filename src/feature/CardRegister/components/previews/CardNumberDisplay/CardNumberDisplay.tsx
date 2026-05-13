import styled from 'styled-components';
import {maskCardNumberGroups} from '@/domain/card/cardNumberMask';

const CardNumberDisplay = ({cardNumbers}: {cardNumbers: string[]}) => {
  const displayNumbers = maskCardNumberGroups(cardNumbers);

  return (
    <Container>
      {displayNumbers.map(({value, isMasked}, index) =>
        isMasked ? <MaskedChunk key={index}>{value}</MaskedChunk> : <Chunk key={index}>{value}</Chunk>
      )}
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
