import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  useCardNumber,
  useCardOwnerName,
  useCardPassword,
  useCVC,
  useModal,
  useInput,
} from '../../hooks';

import CardInputs from './CardInputs';
import CompanyModal from './CompanyModal';
import { AppContainer, Button } from '../../components';
import { Header, NextButton, StyledCard, Title } from './styled';
import { ReactComponent as Arrow } from '../../assets/arrow.svg';

import { CardContext, CardInfoContext } from '../../contexts';
import { NOW } from '../../constants';
import {
  encryptCardNumber,
  makeCardOwnerName,
  makeValidDate,
} from '../../utils/processCard';
import { splitCardNumbers } from '../../utils/regExp';
import isValidCardInputs from '../../utils/validator';

function AddPage() {
  const [cardCompany, setCardCompany] = useState({
    name: '',
    color: '#D2D2D2',
  });
  const [cardNumber, setCardNumber] = useCardNumber('');
  const [cardOwnerName, setCardOwnerName] = useCardOwnerName('');
  const [validDate, setValidDate] = useInput(`${NOW.YEAR}-${NOW.MONTH}`);
  const [CVC, setCVC] = useCVC('');
  const [firstPassword, setFirstPassword] = useCardPassword('');
  const [secondPassword, setSecondPassword] = useCardPassword('');
  const [isCVCModalOpen, toggleIsCVCModalOpen] = useModal(false);
  const [isCardCompanyModalOpen, toggleIsCardCompanyModalOpen] =
    useModal(false);
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

  const toggleCardCompanyModal = () => {
    toggleIsCardCompanyModalOpen(!isCardCompanyModalOpen);
  };

  const onClickCardCompany = ({ currentTarget }) => {
    const { name, color } = currentTarget.dataset;

    setCardCompany({ name, color });
    toggleIsCardCompanyModalOpen(false);
  };

  const onClickNextButton = () => {
    dispatch({
      type: 'SAVE_CARD_INFO',
      card: {
        cardCompany: cardCompany.name,
        cardColor: cardCompany.color,
        cardNumber,
        cardOwnerName,
        validDate,
        CVC,
        password: firstPassword + secondPassword,
      },
    });

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
      isCardCompanyModalOpen,
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
          number={splitCardNumbers(encryptCardNumber(cardNumber), ' ') ?? ''}
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
