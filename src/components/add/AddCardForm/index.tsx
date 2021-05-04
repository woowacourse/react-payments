import { FocusEvent, FormEvent, useEffect, useState, VFC } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { CardBrand, ExpDate } from '../../../types';
import { AddCardFormContainer } from './styles';
import { useCards } from '../../../context/CardsStateContext';
import CreditCard from '../../shared/CreditCard';
import Button from '../../shared/Button';
import CardBrandModal from '../CardBrandModal';
import CARD_BRAND from '../../../constants/cardData';
import { CARD_NUMBER_DIGITS, CARD_NUMBER_SEPARATOR } from '../../../constants/creditCard';
import { ALERT } from '../../../constants/messages';
import { isAllInputFilled } from './validator';
import CardNumberInputs from './CardNumberInput';
import ExpDateInputs from './ExpDateInput';
import OwnerNameInput from './OwnerNameInput';
import CVCInput from './CVCInput';
import PasswordInputs from './PasswordInputs';

export type CardNumberState = [string, string, string, string];
export type PasswordState = [string, string];

interface AddCardFormState {
  cardBrand: CardBrand;
  ownerName: string;
  cardNumber: CardNumberState;
  expDate: ExpDate;
  CVC: string;
  password: PasswordState;
}

const AddCardForm: VFC<RouteComponentProps> = ({ history }) => {
  const [formState, setFormState] = useState<AddCardFormState>({
    cardBrand: { name: '', color: '' },
    ownerName: '',
    cardNumber: ['', '', '', ''],
    expDate: { year: '', month: '' },
    CVC: '',
    password: ['', ''],
  });

  const [isCardBrandModalVisible, setIsCardBrandModalVisible] = useState(false);

  const onClickCardBrandButton = (cardBrand: CardBrand) => {
    setFormState({ ...formState, cardBrand });
    setIsCardBrandModalVisible(false);
  };

  const onSetCardBrand = () => {
    const [firstCardNumber, secondCardNumber] = formState.cardNumber;

    if (firstCardNumber.length !== CARD_NUMBER_DIGITS || secondCardNumber.length !== CARD_NUMBER_DIGITS) {
      setFormState({ ...formState, cardBrand: { name: '', color: '' } });
      return;
    }

    const cardBrand = CARD_BRAND[Number(secondCardNumber.charAt(3))];

    if (!cardBrand) {
      setIsCardBrandModalVisible(true);
      return;
    }

    setFormState({ ...formState, cardBrand });
  };

  const isCardBrandEmpty = () => {
    const [firstCardNumber, secondCardNumber] = formState.cardNumber;

    return (
      formState.cardBrand.name === '' &&
      firstCardNumber.length === CARD_NUMBER_DIGITS &&
      secondCardNumber.length === CARD_NUMBER_DIGITS
    );
  };

  const { addCard, hasError } = useCards();

  const onSubmitCard = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isCardBrandEmpty()) {
      onSetCardBrand();
      return;
    }

    const { cardNumber, cardBrand, CVC, expDate, ownerName, password } = formState;

    if (!isAllInputFilled({ cardNumber, cardBrand, CVC, expDate, ownerName, password })) {
      alert(ALERT.SHOULD_FILL_REQUIRED_INPUTS);
      return;
    }

    const cardId = await addCard({
      ...formState,
      cardNumber: formState.cardNumber.join('-'),
      password: formState.password.join(''),
      nickname: cardBrand.name,
    });

    if (hasError) {
      alert(ALERT.ADD_CARD_ERROR);
      history.push('/');
      return;
    }

    history.push(`/edit/${cardId}`);
  };

  useEffect(() => {
    onSetCardBrand();
  }, formState.cardNumber.slice(0, 2));

  return (
    <AddCardFormContainer>
      <CreditCard
        className="credit-card"
        cardBrand={formState.cardBrand}
        expDate={formState.expDate}
        ownerName={formState.ownerName}
        cardNumber={formState.cardNumber.join(CARD_NUMBER_SEPARATOR)}
      />
      <form onSubmit={onSubmitCard}>
        <CardNumberInputs
          cardNumber={formState.cardNumber}
          setCardNumber={cardNumber => setFormState({ ...formState, cardNumber })}
        />
        <ExpDateInputs expDate={formState.expDate} setExpDate={expDate => setFormState({ ...formState, expDate })} />
        <OwnerNameInput
          ownerName={formState.ownerName}
          setOwnerName={ownerName => setFormState({ ...formState, ownerName })}
        />
        <CVCInput CVC={formState.CVC} setCVC={CVC => setFormState({ ...formState, CVC })} />
        <PasswordInputs
          password={formState.password}
          setPassword={password => setFormState({ ...formState, password })}
        />

        <Button position="bottom-right">다음</Button>

        {isCardBrandModalVisible && (
          <CardBrandModal
            cardBrands={CARD_BRAND}
            onClickCardBrandButton={onClickCardBrandButton}
            modalClose={() => setIsCardBrandModalVisible(false)}
          />
        )}
      </form>
    </AddCardFormContainer>
  );
};

export default withRouter(AddCardForm);
