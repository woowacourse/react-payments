import styled from 'styled-components';

import { Button, Card, UnderlinedInput } from '../../components';

import { splitCardNumbers } from '../../utils/regExp';

export default {
  title: 'Example/Page',
  component: [Button, Card, UnderlinedInput],
};

const StyledPage = styled.div`
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 400px;
  height: 757px;
`;

const Message = styled.div`
  font-size: 24px;
  margin: 100px 0 77px;
`;

const CheckButton = styled(Button)`
  margin: auto 0 0 auto;
`;

function AddCompleteSuccessTemplate({ card }) {
  return (
    <StyledPage>
      <Message>카드등록이 완료되었습니다.</Message>
      <Card
        bgColor={card.cardColor}
        size="large"
        name={card.cardOwnerName}
        number={splitCardNumbers(card.cardNumber, ' ')}
        validDate={card.validDate}
      />
      <UnderlinedInput
        margin={{ t: '33px' }}
        padding={{ b: '5px' }}
        width="250px"
      />
      <CheckButton color="#04C09E" fontWeight="bold">
        확인
      </CheckButton>
    </StyledPage>
  );
}

const AddCompleteSuccess = AddCompleteSuccessTemplate.bind({});
AddCompleteSuccess.args = {
  card: {
    cardColor: '#ADD8E6',
    cardOwnerName: 'HALEE',
    cardNumber: '11112222••••••••',
    validDate: '05/22',
  },
};

const StyledLink = styled.a`
  animation-duration: 3s;
  animation-name: rainbowLink;
  animation-iteration-count: infinite;
  font-size: 18px;
  text-decoration-line: none;

  @keyframes rainbowLink {
    0% {
      color: #ff2a2a;
    }
    15% {
      color: #ff7a2a;
    }
    30% {
      color: #ffc52a;
    }
    45% {
      color: #43ff2a;
    }
    60% {
      color: #2a89ff;
    }
    75% {
      color: #202082;
    }
    90% {
      color: #6b2aff;
    }
    100% {
      color: #e82aff;
    }
  }
`;

function AddCompleteFailTemplate() {
  return (
    <StyledPage>
      <Message>등록된 카드 정보가 없습니다.</Message>
      <Button margin={{ t: '20px' }}>
        <StyledLink>카드 정보 입력 페이지로 이동</StyledLink>
      </Button>
    </StyledPage>
  );
}

const AddCompleteFail = AddCompleteFailTemplate.bind({});
AddCompleteFail.args = {
  card: {
    cardColor: '#ADD8E6',
    cardName: '',
    cardOwnerName: '',
    cardNumber: '',
    validDate: '',
  },
};

export { AddCompleteSuccess, AddCompleteFail };
