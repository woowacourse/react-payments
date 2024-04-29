import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CardInfoContext } from '../context/CardInfoContext';

import Button from '../components/common/Button';
import * as CF from './style/ConfirmPage.style';
import Confirm from '../asset/Confirm.svg';
import { CARD_COMPANY } from '../constants/option';
import { initialCardInfoContext } from '../context/CardInfoContext';

const ConfirmPage = () => {
  const { cardInfo, changeCardInfo } = useContext(CardInfoContext);
  const navigate = useNavigate();

  const company = CARD_COMPANY.find((card) => card[1] === cardInfo.cardCompany);

  const cardCompanyName = company ? company[0] : '선택한 카드';

  const resetCardInfoAndNavigate = () => {
    changeCardInfo(initialCardInfoContext.cardInfo);
    navigate('/');
  };

  return (
    <>
      <CF.Container>
        <CF.Confirm>
          <CF.Image src={Confirm} alt="카드 생성 완료 아이콘" />
          <CF.Title>
            {cardInfo.cardNumber[0]}로 시작하는 <br /> {cardCompanyName}가
            등록되었어요.
          </CF.Title>
          <Button
            type="button"
            text="확인"
            onClick={resetCardInfoAndNavigate}
          />
        </CF.Confirm>
      </CF.Container>
    </>
  );
};

export default ConfirmPage;
