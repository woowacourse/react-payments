import CardPreview from 'components/CardPreview';
import Button from 'components/common/Button';
import { CRYPTO_STRING } from 'constants';
import useToggle from 'hooks/useToggle';
import { ReactComponent as PrevIcon } from 'assets/prev_icon.svg';
import Header from 'components/common/Header';
import useIsFilled from 'hooks/useIsFilled';
import { CARD_ALIAS } from 'constants';
import Message from 'components/common/Message';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const mockCardInfo = {
  company: '클린카드',
  cardNumber: {
    first: '1111',
    second: '2222',
    third: '3333',
    fourth: '4444',
  },
  expiryDate: {
    month: '12',
    year: '23',
  },
  ownerName: 'lokba',
  privacyCode: '123',
  password: {
    first: '1',
    second: '1',
    third: CRYPTO_STRING,
    fourth: CRYPTO_STRING,
  },
  theme: 'red',
};

const CardAddConfirmPage = () => {
  const [cardAlias, setCardAlias] = useState('');
  const [isCardFront, handleCardPosition] = useToggle(true);
  const { theme } = mockCardInfo;
  const [isCardAliasFilled] = useIsFilled(CARD_ALIAS, cardAlias, false);

  const handleChange = (e) => {
    setCardAlias(e.target.value);
  };

  return (
    <div>
      <Header title="카드 추가완료">
        <Link to="/add">
          <Button>
            <PrevIcon />
          </Button>
        </Link>
      </Header>
      <div className="flex-center">
        <h2 className="content-title mt-20 mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <CardPreview
        cardInfo={mockCardInfo}
        isCardFront={isCardFront}
        handleCardPosition={handleCardPosition}
      />
      <div className="input-container flex-center w-100">
        <input className="input-underline w-75" type="text" onChange={handleChange} autoFocus />
      </div>
      <Message name="cardAlias" isFilled={isCardAliasFilled} align="text-center" />
      {isCardAliasFilled && (
        <div className="flex-right right-bottom-edge">
          <Link to="/">
            <Button theme={theme} className="">
              확인
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardAddConfirmPage;
