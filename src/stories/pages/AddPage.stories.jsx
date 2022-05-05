import styled from 'styled-components';

import CardInputs from '../../pages/AddPage/CardInputs';
import { Button, Card } from '../../components';

import { CardInfoContext } from '../../contexts';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

export default {
  title: 'Example/Page',
  component: [CardInputs, Button, Card],
};

const StyledPage = styled.form`
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 25px;
`;

const Title = styled.span`
  font-size: 16px;
  margin-left: 18px;
`;

const StyledCard = styled(Card)`
  align-self: center;
  margin-bottom: 25px;
`;

const NextButton = styled(Button)`
  align-self: end;
`;

function AddTemplate({ forwardValue }) {
  return (
    <CardInfoContext.Provider value={forwardValue}>
      <StyledPage>
        <Header>
          <Button size="small" content={<Arrow />} />
          <Title>카드 추가</Title>
        </Header>
        <StyledCard
          bgColor="#ADD8E6"
          size="medium"
          name={forwardValue.cardOwnerName}
          number={forwardValue.cardNumber}
          validDate={forwardValue.validDate}
        />
        <CardInputs />
        <NextButton color="#04C09E" content="다음" fontWeight="bold" />
      </StyledPage>
    </CardInfoContext.Provider>
  );
}

const Add = AddTemplate.bind({});
Add.args = {
  forwardValue: {
    cardNumber: '',
    setCardNumber: () => {},
    validDate: '',
    setValidDate: () => {},
    cardOwnerName: '',
    setCardOwnerName: () => {},
    CVC: '',
    setCVC: () => {},
    isModalOpen: false,
    toggleModal: () => {},
    firstPassword: '',
    setFirstPassword: () => {},
    secondPassword: '',
    setSecondPassword: () => {},
  },
};

export { Add };
