import { useReducer, useCallback, useRef } from 'react';
import useCardInfo from 'hooks/useCardInfo';
import { useNavigate } from 'react-router-dom';

import FormInput from 'components/@common/FormInput';
import CardPreview from 'components/CardPreview';
import Modal from 'components/@common/Modal';
import CardCompany from 'components/CardCompany';
import Button from 'components/@common/Button';
import Tooltip from 'components/@common/Tooltip';

import { moveInputFocus } from 'utils';
import { validator } from './validator';
import { CRYPTO_STRING, INPUT_MAX_LENGTH } from 'constants';
import {
  cardNumberInputInfoList,
  expiryDateInputInfoList,
  cardOwnerNameInputInfoList,
  privacyCodeInputInfoList,
  cardPasswordInputInfoList,
  cardCompanyList,
} from './data';
import { ACTION, ROUTE } from 'constants';
import useCardContext from 'hooks/useCardContext';

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
  const navigate = useNavigate();
  const { dispatch } = useCardContext();
  const [cardInfo, isFullFilled, handleCardInfo] = useCardInfo(initialCardInfo);
  const [modalVisible, handleModal] = useReducer((visible) => !visible, false);
  const { number, ownerName, expiryDate, company, theme, password, privacyCode } = cardInfo;
  const inputRef = useRef([]);

  const handleInputChange = useCallback(
    ({ target }, item, id, maxLength) => {
      const { name, value } = target;

      if (!validator[item](value, name)) return;

      handleCardInfo({ item, name, value });

      if (value.length >= maxLength) moveInputFocus(inputRef, id + 1);
    },
    [handleCardInfo],
  );

  const handleClickCompany = (company, theme) => {
    handleCardInfo({ item: 'company', value: company });
    handleCardInfo({ item: 'theme', value: theme });

    handleModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTION.CREATE_CARD, card: cardInfo });
    navigate(ROUTE.CONFIRM + cardInfo.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardPreview
        number={number}
        ownerName={ownerName}
        expiryDate={expiryDate}
        company={company}
        handleClick={handleModal}
        theme={theme}
      />
      <FormInput
        item="number"
        inputTitle="카드 번호"
        inputInfoList={cardNumberInputInfoList}
        inputValue={number}
        onChange={handleInputChange}
        theme={theme}
        inputRef={inputRef}
      />
      <FormInput
        className="w-50"
        item="expiryDate"
        inputTitle="만료일"
        inputInfoList={expiryDateInputInfoList}
        inputValue={expiryDate}
        onChange={handleInputChange}
        theme={theme}
        inputRef={inputRef}
      />
      <FormInput
        item="ownerName"
        inputTitle="카드 소유자 이름(선택)"
        inputInfoList={cardOwnerNameInputInfoList}
        inputValue={ownerName}
        onChange={handleInputChange}
        theme={theme}
        inputRef={inputRef}
      >
        <div className="owner-name-length">
          {ownerName.length} / {INPUT_MAX_LENGTH.OWNER_NAME}
        </div>
      </FormInput>
      <FormInput
        item="privacyCode"
        inputTitle="보안코드(CVC/CVV)"
        inputInfoList={privacyCodeInputInfoList}
        onChange={handleInputChange}
        inputValue={privacyCode}
        theme={theme}
        inputRef={inputRef}
      >
        <Tooltip type="PRIVACY_CODE" />
      </FormInput>
      <FormInput
        item="password"
        inputTitle="카드 비밀번호"
        inputInfoList={cardPasswordInputInfoList}
        inputValue={{ ...password, third: CRYPTO_STRING, fourth: CRYPTO_STRING }}
        onChange={handleInputChange}
        theme={theme}
        inputRef={inputRef}
      />
      {isFullFilled && (
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
    </form>
  );
};

export default CardAppPage;
