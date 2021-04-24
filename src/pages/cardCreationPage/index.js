import { Button } from '../../components/commons/button/Button';
import { Header } from '../../components/commons/header/Header';
import { CreditCard } from '../../components/commons/card/CreditCard';
import { ReactComponent as PrevIcon } from '../../assets/prevIcon.svg';
import CardNumberInput from '../../components/cardCreation/cardNumberInput/CardNumberInput';
import ExpiredDateInput from '../../components/cardCreation/expiredDateInput/ExpiredDateInput';
import CardOwnerInput from '../../components/cardCreation/cardOwnerInput/CardOwnerInput';
import SecurityCodeInput from '../../components/cardCreation/securityCodeInput/SecurityCodeInput';
import CardPasswordInput from '../../components/cardCreation/cardPasswordInput/CardPasswordInput';
import Styled from './style';
import { COLOR } from '../../constants/color';
import { PAGE } from '../../constants/page';

const CardCreationPage = ({ setCurrentPage }) => {
  return (
    <>
      <Header>
        <Button styles={{ marginRight: '18px' }}>
          <PrevIcon />
        </Button>
        <span>카드 추가</span>
      </Header>
      <div>
        <CreditCard />
        <Styled.Form>
          <CardNumberInput />
          <ExpiredDateInput />
          <CardOwnerInput />
          <SecurityCodeInput />
          <CardPasswordInput />
        </Styled.Form>
      </div>
      <Styled.ButtonContainer>
        <Button onClick={() => setCurrentPage(PAGE.CARD_CREATION_COMPLETE)} styles={{ color: COLOR.MINT }}>
          다음
        </Button>
      </Styled.ButtonContainer>
    </>
  );
};

export default CardCreationPage;
