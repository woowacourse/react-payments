import { AppContainer, Button } from 'components';
import { CardContext, CardInfoContext } from 'contexts';
import { Header, NextButton, StyledCard, Title } from './styled';
import { makeCardOwnerName, makeValidDate } from 'utils/processCard';
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  useCVC,
  useCardNumber,
  useCardOwnerName,
  useCardPassword,
  useInput,
  useModal,
} from 'hooks';

import { ReactComponent as Arrow } from 'assets/arrow.svg';
import CardInputs from './CardInputs';
import { CardType } from 'types';
import CompanyModal from './CompanyModal';
import { NOW } from 'constants/index';
import actions from 'actions';
import isValidCardInputs from 'utils/validator';
import { useNavigate } from 'react-router-dom';

function AddPage() {
  const [cardCompany, setCardCompany] = useState({
    name: '',
    color: '#D2D2D2',
  });
  const { cardNumber, setCardNumber } = useCardNumber('');
  const { cardOwnerName, setCardOwnerName } = useCardOwnerName('');
  const { value: validDate, setValue: setValidDate } = useInput(
    `${NOW.YEAR}-${NOW.MONTH}`
  );
  const { CVC, setCVC } = useCVC('');
  const { password: firstPassword, setPassword: setFirstPassword } =
    useCardPassword('');
  const { password: secondPassword, setPassword: setSecondPassword } =
    useCardPassword('');
  const {
    isModalOpen: isCVCModalOpen,
    toggleIsModalOpen: toggleIsCVCModalOpen,
  } = useModal(false);
  const {
    isModalOpen: isCardCompanyModalOpen,
    toggleIsModalOpen: toggleIsCardCompanyModalOpen,
  } = useModal(false);
  const [isPossible, setIsPossible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useContext(CardContext);

  useEffect(() => {
    try {
      isValidCardInputs(
        cardNumber,
        validDate,
        CVC,
        firstPassword,
        secondPassword
      );
      setIsPossible(true);
    } catch (e) {
      setIsPossible(false);
    }
  }, [cardNumber, validDate, CVC, firstPassword, secondPassword]);

  const onClickArrowButton = () => {
    navigate(-1);
  };

  const toggleCardCompanyModal = useCallback(() => {
    toggleIsCardCompanyModalOpen();
  }, [toggleIsCardCompanyModalOpen]);

  const onClickCardCompany = useCallback(
    ({ currentTarget }: React.MouseEvent<HTMLElement>) => {
      const name = currentTarget.dataset.name as string;
      const color = currentTarget.dataset.color as string;

      setCardCompany({ name, color });
      toggleIsCardCompanyModalOpen();
    },
    [toggleIsCardCompanyModalOpen]
  );

  const onClickNextButton = () => {
    const card: CardType = {
      cardName: '',
      cardCompany: cardCompany.name,
      cardColor: cardCompany.color,
      cardNumber,
      cardOwnerName,
      validDate,
      cardCVC: CVC,
      cardPassword: firstPassword + secondPassword,
    };

    dispatch(actions.saveCardInfo(card));

    navigate('../complete');
  };

  const forwardValue = useMemo(
    () => ({
      cardNumber,
      setCardNumber,
      validDate,
      setValidDate,
      cardOwnerName,
      setCardOwnerName,
      CVC,
      setCVC,
      isModalOpen: isCVCModalOpen,
      toggleModal: toggleIsCVCModalOpen,
      firstPassword,
      setFirstPassword,
      secondPassword,
      setSecondPassword,
      toggleCardCompanyModal,
      onClickCardCompany,
    }),
    [
      cardNumber,
      validDate,
      cardOwnerName,
      CVC,
      isCVCModalOpen,
      firstPassword,
      secondPassword,
      onClickCardCompany,
      setCVC,
      setCardNumber,
      setCardOwnerName,
      setFirstPassword,
      setSecondPassword,
      setValidDate,
      toggleCardCompanyModal,
      toggleIsCVCModalOpen,
    ]
  );

  return (
    <CardInfoContext.Provider value={forwardValue}>
      <AppContainer>
        <Header>
          <Button size="small" onClickFunc={onClickArrowButton}>
            <Arrow />
          </Button>
          <Title>카드 추가</Title>
        </Header>
        <StyledCard
          bgColor={cardCompany.color}
          company={cardCompany.name}
          size="medium"
          name={makeCardOwnerName(cardOwnerName)}
          number={cardNumber}
          validDate={makeValidDate(validDate)}
          onClickFunc={toggleCardCompanyModal}
        />
        <CardInputs />
        {isPossible && (
          <NextButton
            color="#04C09E"
            fontWeight="bold"
            onClickFunc={onClickNextButton}
          >
            다음
          </NextButton>
        )}
        {isCardCompanyModalOpen && <CompanyModal />}
      </AppContainer>
    </CardInfoContext.Provider>
  );
}

export default memo(AddPage);
