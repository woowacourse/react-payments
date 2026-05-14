import styled from 'styled-components';

const CardExpiryDateDisplay = ({
  expiryMonth,
  expiryYear,
}: {
  expiryMonth: string;
  expiryYear: string;
}) => {
  return (
    <Container>
      <Chunk>{expiryMonth}</Chunk>
      <Delimiter>
        {expiryMonth.length === 2 || expiryYear.length === 2 ? '/' : ''}
      </Delimiter>
      <Chunk>{expiryYear}</Chunk>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 2px;
  height: 25px;
  font-family: 'Inter', sans-serif;
`;

const Chunk = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Delimiter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CardExpiryDateDisplay;
