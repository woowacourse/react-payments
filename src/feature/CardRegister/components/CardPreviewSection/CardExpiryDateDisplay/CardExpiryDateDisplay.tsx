import styled from 'styled-components';

const CardExpiryDateDisplay = ({expiryDate}: {expiryDate: string[]}) => {
  const [expiryMonth, expiryYear] = expiryDate;
  const delimiter = expiryMonth?.length === 2 || expiryYear?.length === 2 ? '/' : '';
  return (
    <Container>
      <Chunk>{expiryMonth}</Chunk>
      <Delimiter>{delimiter}</Delimiter>
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
