import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CardNumbers from '../components/CardNumbers/CardNumbers';
import ExpiredDate from '../components/ExpiredDate/ExpiredDate';
import CardOwnerName from '../components/CardOwnerName/CardOwnerName';
import SecurityCode from '../components/SecurityCode/SecurityCode';
import CardPassword from '../components/CardPassword/CardPassword';
import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import BottomSheet from '../components/BottomSheet/BottomSheet';
import {
  useAddCard,
  useCardNumbers,
  useCardOwnerName,
  useCardPassword,
  useExpiredDate,
  useSecurityCode,
  useCardCompany,
  useBottomSheet,
} from '../hooks';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0;
`;

const NextButton = styled.button<{ disabled: boolean }>`
  color: ${(props) => (props.disabled ? '#969696' : '#000')};
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

interface SetCardsProps {
  handleSetCards: (
    cardNumbers: Record<number, string>,
    expiredDate: Record<number, string>,
    cardOwnerName: string,
    cardCompany: string
  ) => void;
}

const AddCard = ({ handleSetCards }: SetCardsProps) => {
  const { cardNumbers, checkCardNumbers } = useCardNumbers();
  const { cardOwnerName, checkCardOwnerName } = useCardOwnerName();
  const { password, checkPassword } = useCardPassword();
  const { securityCode, checkSecurityCode } = useSecurityCode();
  const { expiredDate, checkExpiredDate, validateDate } = useExpiredDate();
  const { cardCompany, checkCardCompany } = useCardCompany();

  const { isBottomSheetOpen, closeBottomSheet } = useBottomSheet();

  const { disabled } = useAddCard(
    cardNumbers,
    expiredDate,
    securityCode,
    password
  );

  const navigate = useNavigate();

  return (
    <>
      <Layout>
        <form
          onSubmit={() => {
            handleSetCards(
              cardNumbers,
              expiredDate,
              cardOwnerName,
              cardCompany
            );
            navigate('/');
          }}
        >
          <Wrapper>
            <Card
              cardNumbers={cardNumbers}
              expiredDate={expiredDate}
              cardOwnerName={cardOwnerName}
              cardCompany={cardCompany}
            />
          </Wrapper>
          <CardNumbers
            cardNumbers={cardNumbers}
            checkCardNumbers={checkCardNumbers}
          />
          <ExpiredDate
            expiredDate={expiredDate}
            checkExpiredDate={checkExpiredDate}
            validateDate={validateDate}
          />
          <CardOwnerName
            cardOwnerName={cardOwnerName}
            checkCardOwnerName={checkCardOwnerName}
          />
          <SecurityCode
            securityCode={securityCode}
            checkSecurityCode={checkSecurityCode}
          />
          <CardPassword password={password} checkPassword={checkPassword} />
          <ButtonWrapper>
            <NextButton disabled={disabled}>다음</NextButton>
          </ButtonWrapper>
        </form>
      </Layout>
      {isBottomSheetOpen && (
        <BottomSheet
          checkCardCompany={checkCardCompany}
          closeBottomSheet={closeBottomSheet}
        />
      )}
    </>
  );
};

export default AddCard;
