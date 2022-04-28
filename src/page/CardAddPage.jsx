import { useState, useCallback, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import FormInput from '../components/common/FormInput';
import CardPreview from '../components/CardPreview';
import Modal from '../components/common/Modal';
import CardCompany from '../components/CardCompany';
import Header from '../components/common/Header';
import Button from '../components/common/Button';

import { ReactComponent as PrevIcon } from '../assets/prev_icon.svg';
import Tooltip from '../components/common/Tooltip';
import { isEnglish, isNumber } from '../utils';
import { COMPANY, INPUT_MAX_LENGTH, THEME, CRYPTO_STRING, DATE_RANGE } from '../constants';

const cardNumberInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    className: 'mr-n15 tracking-wide',
    name: 'first',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
    autoFocus: true,
  },
  {
    id: uuid(),
    type: 'text',
    className: 'mr-n15 tracking-wide',
    name: 'second',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'mr-n15 tracking-wide',
    name: 'third',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'tracking-wide',
    name: 'fourth',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
  },
];

const expiryDateInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    placeholder: 'MM',
    className: 'mr-n15',
    name: 'month',
    maxLength: INPUT_MAX_LENGTH.EXPIRY_DATE,
  },
  {
    id: uuid(),
    type: 'text',
    placeholder: 'YY',
    name: 'year',
    maxLength: INPUT_MAX_LENGTH.EXPIRY_DATE,
  },
];

const cardOwnerNameInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    className: 'text-left',
    maxLength: INPUT_MAX_LENGTH.OWNER_NAME,
  },
];

const privacyCodeInputInfoList = [
  {
    id: uuid(),
    type: 'password',
    className: 'w-25 tracking-wide',
    maxLength: INPUT_MAX_LENGTH.PRIVACY_CODE,
  },
];

const cardPasswordInputInfoList = [
  {
    id: uuid(),
    type: 'password',
    className: 'w-5',
    name: 'first',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5',
    name: 'second',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5 input-disabled',
    isDisabled: true,
    name: 'third',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5 input-disabled',
    isDisabled: true,
    name: 'fourth',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
];

const cardCompanyList = [
  { id: uuid(), company: COMPANY.VALLISTA, theme: THEME.RED },
  { id: uuid(), company: COMPANY.YULIE, theme: THEME.BLUE },
  { id: uuid(), company: COMPANY.ASA, theme: THEME.GREEN },
  { id: uuid(), company: COMPANY.ROY, theme: THEME.HOT_PINK },
  { id: uuid(), company: COMPANY.AUSTIN, theme: THEME.MINT },
  { id: uuid(), company: COMPANY.YB, theme: THEME.PINK },
  { id: uuid(), company: COMPANY.NOS, theme: THEME.ORANGE },
  { id: uuid(), company: COMPANY.WALTER, theme: THEME.YELLOW },
];

const initialCardInfo = {
  company: '',
  number: {
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

const validator = {
  number(value) {
    return isNumber(Number(value));
  },
  expiryDate(value, name) {
    if (name === 'year') {
      if (!isNumber(Number(value))) {
        return false;
      }

      if (value.length === INPUT_MAX_LENGTH.EXPIRY_DATE) {
        return Number(value) >= DATE_RANGE.MIN_YEAR;
      }

      return true;
    }

    if (name === 'month') {
      if (!isNumber(Number(value))) {
        return false;
      }

      if (value.length === 1) {
        return Number(value) <= 1;
      }

      if (value.length === INPUT_MAX_LENGTH.EXPIRY_DATE) {
        return Number(value) >= DATE_RANGE.MIN_MONTH && Number(value) <= DATE_RANGE.MAX_MONTH;
      }

      return true;
    }
  },
  ownerName(value) {
    return isEnglish(value);
  },
  privacyCode(value) {
    return isNumber(Number(value));
  },
  password(value) {
    return isNumber(Number(value));
  },
};

const isFullNumber = (number) => {
  return Object.values(number).every((number) => number.length === INPUT_MAX_LENGTH.NUMBER);
};

const isFullCompany = (company) => {
  return company !== '';
};

const isFullExpiryDate = (expiryDate) => {
  return Object.values(expiryDate).every(
    (number) => number.length === INPUT_MAX_LENGTH.EXPIRY_DATE,
  );
};

const isFullPrivacyCode = (privacyCode) => {
  return privacyCode.length === INPUT_MAX_LENGTH.PRIVACY_CODE;
};

const isFullPassword = (password) => {
  return Object.values(password).every((number) => number.length === INPUT_MAX_LENGTH.PASSWORD);
};

const checkFullFilled = (cardInfo) => {
  const { number, company, expiryDate, privacyCode, password } = cardInfo;

  return (
    isFullNumber(number) &&
    isFullCompany(company) &&
    isFullExpiryDate(expiryDate) &&
    isFullPrivacyCode(privacyCode) &&
    isFullPassword(password)
  );
};

//component
const CardAppPage = () => {
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  const [modalVisible, setModalVisible] = useState(false);
  const [isfullFilled, setIsFullFilled] = useState(false);
  const { number, ownerName, expiryDate, company, theme } = cardInfo;

  const handleChange = ({ target }, item) => {
    const { name, value } = target;

    if (!validator[item](value, name)) return;

    setCardInfo((prevCardInfo) => {
      if (typeof prevCardInfo[item] === 'object') {
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

  useEffect(() => {
    if (checkFullFilled(cardInfo)) {
      setIsFullFilled(true);
      return;
    }

    setIsFullFilled(false);
  }, [cardInfo]);

  const handleClickCompany = (company, theme) => {
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      company,
      theme,
    }));

    handleModal();
  };

  const handleModal = useCallback(() => {
    setModalVisible((prevModalVisible) => !prevModalVisible);
  }, []);

  return (
    <div>
      <Header title="카드 추가">
        <Button>
          <PrevIcon />
        </Button>
      </Header>
      <CardPreview
        number={number}
        ownerName={ownerName}
        expiryDate={expiryDate}
        company={company}
        handleModal={handleModal}
        theme={theme}
      />
      <FormInput
        item="number"
        inputTitle="카드 번호"
        inputInfoList={cardNumberInputInfoList}
        cardInfo={cardInfo}
        onChange={handleChange}
      />
      <FormInput
        className="w-50"
        item="expiryDate"
        inputTitle="만료일"
        inputInfoList={expiryDateInputInfoList}
        cardInfo={cardInfo}
        onChange={handleChange}
      />
      <FormInput
        item="ownerName"
        inputTitle="카드 소유자 이름(선택)"
        inputInfoList={cardOwnerNameInputInfoList}
        cardInfo={cardInfo}
        onChange={handleChange}
      >
        <div className="owner-name-length">
          {ownerName.length} / {INPUT_MAX_LENGTH.OWNER_NAME}
        </div>
      </FormInput>
      <FormInput
        item="privacyCode"
        inputTitle="보안코드(CVC/CVV)"
        inputInfoList={privacyCodeInputInfoList}
        onChange={handleChange}
        cardInfo={cardInfo}
      >
        <Tooltip type="PRIVACY_CODE" />
      </FormInput>
      <FormInput
        item="password"
        inputTitle="카드 비밀번호"
        inputInfoList={cardPasswordInputInfoList}
        cardInfo={cardInfo}
        onChange={handleChange}
      />

      {isfullFilled && (
        <Button theme={theme} className="next-button">
          다음
        </Button>
      )}
      {modalVisible && (
        <Modal handleModal={handleModal}>
          <div className="flex-wrap">
            {cardCompanyList.map(({ id, company, theme }) => (
              <CardCompany
                key={id}
                company={company}
                theme={theme}
                onClickCompany={handleClickCompany}
              />
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CardAppPage;
