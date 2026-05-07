import styled from 'styled-components';

const CardNumberDisplay = ({cardNumbers}: {cardNumbers: string[]}) => {
  return (
    <Container>
      {cardNumbers.map((chunk, index) => {
        if (index >= 2) {
          return <MaskedChunk key={index}>{'·'.repeat(chunk.length)}</MaskedChunk>;
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

  width: 38px;
  letter-spacing: 2px;
`;

const MaskedChunk = styled(Chunk)`
  font-size: 28px;
  letter-spacing: 1px;
`;

export default CardNumberDisplay;
