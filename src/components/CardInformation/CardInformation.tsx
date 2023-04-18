import CardLabel from '../CardLabel/CardLabel';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import styled from 'styled-components';

interface CardInformationProps {
  labelText: string;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #ecebf1;
  border-radius: 7px;
`;

const CardInformation = ({ labelText }: CardInformationProps) => {
  return (
    <>
      <CardLabel labelText={labelText} />
      <Wrapper>
        <CardNumberInput type="text" maxLength={4} />
        <CardNumberInput type="text" maxLength={4} />
        <CardNumberInput type="text" maxLength={4} />
        <CardNumberInput type="text" maxLength={4} />
      </Wrapper>
    </>
  );
};

export default CardInformation;
