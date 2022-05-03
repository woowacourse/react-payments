import { useState } from 'react';

import FormInput from 'components/common/FormInput';
import CardPreview from 'components/CardPreview';
import Modal from 'components/common/Modal';
import Header from 'components/common/Header';
import Button from 'components/common/Button';
import Tooltip from 'components/common/Tooltip';
import { ReactComponent as PrevIcon } from 'assets/prev_icon.svg';

import { validator } from './validator';
import { isObject } from '../../utils';
import {
  CARD_NUMBER,
  COMPANY,
  CRYPTO_STRING,
  EXPIRY_DATE,
  INPUT_MAX_LENGTH,
  PASSWORD,
  PRIVACY_CODE,
} from '../../constants';

import {
  cardNumberInputInfoList,
  expiryDateInputInfoList,
  cardOwnerNameInputInfoList,
  privacyCodeInputInfoList,
  cardPasswordInputInfoList,
  cardCompanyList,
} from './data';
import Circle from '../../components/common/Circle';
import Message from '../../components/common/Message';
import useModal from 'hooks/useModal';
import useIsFilled from 'hooks/useIsFilled';
import useToggle from 'hooks/useToggle';

const getCardInfoMessage = (company, cardNumber, month, year, ownerName, privacyCode) => {
  const { first, second, third, fourth } = cardNumber;

  return `🎊카드가 정상적으로 추가되었습니다.🎊\n\n회사 이름 : ${company}\n카드 번호 : ${first}-${second}-${third}-${fourth}\n만료일 : ${month} / ${year}\n카드 소유자 이름 : ${ownerName}\n보안 코드 : ${privacyCode}`;
};

const initialCardInfo = {
  company: '',
  cardNumber: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expiryDate: {
    month: '',
    year: '',
  },
  ownerName: '',
  privacyCode: '',
  password: {
    first: '',
    second: '',
    third: CRYPTO_STRING,
    fourth: CRYPTO_STRING,
  },
  theme: '',
};

const CardAppPage = () => {
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  const { cardNumber, ownerName, expiryDate, company, theme, password, privacyCode } = cardInfo;

  const [isCompanyFilled] = useIsFilled(COMPANY, company, false);
  const [isCardNumberFilled] = useIsFilled(CARD_NUMBER, cardNumber, false);
  const [isExpiryDateFilled] = useIsFilled(EXPIRY_DATE, expiryDate, false);
  const [isPrivacyCodeFilled] = useIsFilled(PRIVACY_CODE, privacyCode, false);
  const [isPasswordFilled] = useIsFilled(PASSWORD, password, false);
  const [modalVisible, handleModal] = useModal(false);
  const [isCardFront, handleCardPosition] = useToggle(false);

  const handleChange = ({ target }, item) => {
    const { name, value } = target;

    if (!validator[item](value, name)) return;

    setCardInfo((prevCardInfo) => {
      if (isObject(prevCardInfo[item])) {
        return {
          ...prevCardInfo,
          [item]: {
            ...prevCardInfo[item],
            [name]: value,
          },
        };
      }

      return {
        ...prevCardInfo,
        [item]: value,
      };
    });
  };

  const handleCompanyClick = (company, theme) => {
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      company,
      theme,
    }));

    handleModal();
  };

  const handleClickNextButton = () => {
    const { month, year } = expiryDate;
    const cardInfoMessage = getCardInfoMessage(
      company,
      cardNumber,
      month,
      year,
      ownerName,
      privacyCode,
    );

    alert(cardInfoMessage);
  };

  return (
    <div>
      <Header title="카드 추가">
        <Button>
          <PrevIcon />
        </Button>
      </Header>
      <CardPreview
        cardInfo={cardInfo}
        isCardFront={isCardFront}
        handleModal={handleModal}
        handleCardPosition={handleCardPosition}
      />
      <Message name="company" isFilled={isCompanyFilled} align="text-center" />

      <FormInput
        item="cardNumber"
        inputTitle="카드 번호"
        inputInfoList={cardNumberInputInfoList}
        inputValue={cardNumber}
        handleChange={handleChange}
        theme={theme}
        maxLength={INPUT_MAX_LENGTH.CARD_NUMBER}
      />
      <Message name="cardNumber" isFilled={isCardNumberFilled} />

      <FormInput
        className="w-50"
        item="expiryDate"
        inputTitle="만료일"
        inputInfoList={expiryDateInputInfoList}
        inputValue={expiryDate}
        handleChange={handleChange}
        theme={theme}
        maxLength={INPUT_MAX_LENGTH.EXPIRY_DATE}
      />
      <Message name="expiryDate" isFilled={isExpiryDateFilled} />

      <FormInput
        item="ownerName"
        inputTitle="카드 소유자 이름(선택)"
        inputInfoList={cardOwnerNameInputInfoList}
        inputValue={ownerName}
        handleChange={handleChange}
        theme={theme}
        maxLength={INPUT_MAX_LENGTH.OWNER_NAME}
      >
        <div className="owner-name-length">
          {ownerName.length} / {INPUT_MAX_LENGTH.OWNER_NAME}
        </div>
      </FormInput>

      <FormInput
        item="privacyCode"
        inputTitle="보안코드(CVC/CVV)"
        inputInfoList={privacyCodeInputInfoList}
        handleChange={handleChange}
        inputValue={privacyCode}
        theme={theme}
        maxLength={INPUT_MAX_LENGTH.PRIVACY_CODE}
      >
        <Tooltip type="PRIVACY_CODE" />
      </FormInput>
      <Message name="privacyCode" isFilled={isPrivacyCodeFilled} />

      <FormInput
        item="password"
        inputTitle="카드 비밀번호"
        inputInfoList={cardPasswordInputInfoList}
        inputValue={password}
        handleChange={handleChange}
        theme={theme}
        maxLength={INPUT_MAX_LENGTH.PASSWORD}
      />
      <Message name="password" isFilled={isPasswordFilled} />

      {isCompanyFilled &&
        isCardNumberFilled &&
        isExpiryDateFilled &&
        isPrivacyCodeFilled &&
        isPasswordFilled && (
          <Button theme={theme} className="next-button" handleClick={handleClickNextButton}>
            다음
          </Button>
        )}

      {modalVisible && (
        <Modal handleModal={handleModal}>
          <div className="flex-wrap">
            {cardCompanyList.map(({ id, company, theme }) => (
              <div
                key={id}
                className="modal-item-container"
                onClick={() => handleCompanyClick(company, theme)}
              >
                <Circle theme={theme} />
                <span className="modal-item-name">{company}</span>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CardAppPage;
