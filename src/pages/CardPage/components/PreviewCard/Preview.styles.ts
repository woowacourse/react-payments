import styled from '@emotion/styled';

const StyledPreviewCard = styled.div<{ backgroundColor: string }>`
  width: 212px;
  height: 120px;
  border-radius: 4px;
  box-shadow: 3px 3px 5px 0px rgb(0, 0, 0, 0.25);
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  margin: 30px auto;
  transition: background-color 0.3s ease;
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30%;
`;

const StyledICChip = styled.div`
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 3px;
  background-color: #ddcd78;
  z-index: 100;
`;

const StyledCardType = styled.img`
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 3px;
  z-index: 100;
`;

const StyledCardNumberWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  place-items: center;
`;

const StyledCardNumber = styled.div`
  color: white;
  font-size: 14px;
  font-family: 'Inter';
  letter-spacing: 2.5px;
`;

const StyledExpirationDate = styled.div`
  color: white;
  font-size: 14px;
  margin: 10px 2px;
  font-family: 'Inter';
  letter-spacing: 2.5px;
`;

export {
  StyledPreviewCard,
  StyledCardHeader,
  StyledICChip,
  StyledCardType,
  StyledCardNumberWrapper,
  StyledCardNumber,
  StyledExpirationDate,
};
