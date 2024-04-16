import styled from 'styled-components';
import { Visa, MasterCard } from '../assets';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Card = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  padding: 8px 12px;
  background: #333333;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Chip = styled.div`
  width: 36px;
  height: 22px;
  border-radius: 4px;
  background: #ddcd78;
  border: 0.5px solid #ddcd781a;
`;

const Logo = styled.div`
  width: 36px;
  height: 22px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 14px 5px;
`;

const Info = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16em;
  text-align: left;
  word-break: break-all;
`;

interface CardPreviewBoxProps {
  cardNumber: string[];
  month: string;
  year: string;
  owner: string;
}

function CardPreviewBox({ cardNumber, month, year, owner }: CardPreviewBoxProps) {
  const handleLogoImage = (cardNumber: string[]) => {
    if (cardNumber[0].charAt(0) === '4') {
      return <img src={Visa} />;
    }

    if (Number(cardNumber[0].slice(0, 2)) >= 51 && Number(cardNumber[0].slice(0, 2)) <= 55) {
      return <img src={MasterCard} />;
    }
  };

  return (
    <CardContainer>
      <Card>
        <CardHeader>
          <Chip></Chip>
          <Logo>{handleLogoImage(cardNumber)}</Logo>
        </CardHeader>
        <InfoContainer>
          <Info>{cardNumber.map((number) => `${number} `)}</Info>
          <Info>{(month || year) && `${month} / ${year}`}</Info>
          <Info>{owner}</Info>
        </InfoContainer>
      </Card>
    </CardContainer>
  );
}

export default CardPreviewBox;
