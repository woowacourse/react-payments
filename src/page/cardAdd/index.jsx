import { useState, useEffect, useReducer, useCallback } from 'react';

import FormInput from 'components/common/FormInput';
import CardPreview from 'components/CardPreview';
import Modal from 'components/common/Modal';
import CardCompany from 'components/CardCompany';
import Header from 'components/common/Header';
import Button from 'components/common/Button';
import Tooltip from 'components/common/Tooltip';
import { ReactComponent as PrevIcon } from 'assets/prev_icon.svg';

import { validator, checkFullFilled } from './validator';
import { isObject } from 'utils';
import { CRYPTO_STRING, INPUT_MAX_LENGTH } from 'constants';

import {
  cardNumberInputInfoList,
  expiryDateInputInfoList,
  cardOwnerNameInputInfoList,
  privacyCodeInputInfoList,
  cardPasswordInputInfoList,
  cardCompanyList,
} from './data';

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
  },
  theme: '',
};

const CardAppPage = () => {
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  const [modalVisible, handleModal] = useReducer(
    useCallback((visible) => !visible, []),
    false,
  );
  const [isfullFilled, setIsFullFilled] = useState(false);
  const { number, ownerName, expiryDate, company, theme, password, privacyCode } = cardInfo;

  useEffect(() => {
    if (checkFullFilled(cardInfo)) {
      setIsFullFilled(true);
      return;
    }

    setIsFullFilled(false);
  }, [cardInfo]);

  const handleChange = useCallback(({ target }, item) => {
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
  }, []);

  const handleClickCompany = useCallback((company, theme) => {
    setCardInfo((prevCardInfo) => ({
      ...prevCardInfo,
      company,
      theme,
    }));

    handleModal();
  }, []);

  return (
    <>
      <Header
        title="카드 추가"
        left={
          <Button>
            <PrevIcon />
          </Button>
        }
      />
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
        inputValue={number}
        onChange={handleChange}
        theme={theme}
      />
      <FormInput
        className="w-50"
        item="expiryDate"
        inputTitle="만료일"
        inputInfoList={expiryDateInputInfoList}
        inputValue={expiryDate}
        onChange={handleChange}
        theme={theme}
      />
      <FormInput
        item="ownerName"
        inputTitle="카드 소유자 이름(선택)"
        inputInfoList={cardOwnerNameInputInfoList}
        inputValue={ownerName}
        onChange={handleChange}
        theme={theme}
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
        inputValue={privacyCode}
        theme={theme}
      >
        <Tooltip type="PRIVACY_CODE" />
      </FormInput>
      <FormInput
        item="password"
        inputTitle="카드 비밀번호"
        inputInfoList={cardPasswordInputInfoList}
        inputValue={{ ...password, third: CRYPTO_STRING, fourth: CRYPTO_STRING }}
        onChange={handleChange}
        theme={theme}
      />
      {isfullFilled && (
        <Button theme={theme} className="next-button">
          다음
        </Button>
      )}
      {modalVisible && (
        <Modal handleModal={handleModal}>
          <div className="flex-wrap">
            {cardCompanyList.map(({ company, theme }, index) => (
              <CardCompany
                key={index}
                company={company}
                theme={theme}
                onClickCompany={handleClickCompany}
              />
            ))}
          </div>
        </Modal>
      )}
    </>
  );
};

export default CardAppPage;
