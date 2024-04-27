import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CardInfoContext } from '../context/CardInfoContext';

import Button from '../components/common/Button';
import * as CF from './style/ConfirmPage.style';
import Confirm from '../asset/Confirm.svg';
import { CARD_COMPANY } from '../constants/option';
import { initialCardInfoContext } from '../context/CardInfoContext';

const ConfirmPage = () => {
  const { cardInfo, changeCardInfo } = useContext(CardInfoContext);

  const company = CARD_COMPANY.find((card) => card[1] === cardInfo.cardCompany);

  let card = '';
  if (company) {
    card = company[0];
  }

  const resetCardInfo = () => {
    changeCardInfo(initialCardInfoContext.cardInfo);
  };

  return (
    <>
      <CF.Container>
        <CF.Confirm>
          <CF.Image src={Confirm} alt="카드 생성 완료 아이콘" />
          <CF.Title>
            {cardInfo.cardNumber[0]}로 시작하는 <br /> {card}가 등록되었어요.
          </CF.Title>
          <Link to={'/'} style={{ width: 'inherit' }}>
            <Button text="확인" onClick={resetCardInfo} />
          </Link>
        </CF.Confirm>
      </CF.Container>
    </>
  );
};

export default ConfirmPage;
