import { useReducer, useCallback, useContext, useRef } from 'react';
import useCardInfo from 'hooks/useCardInfo';
import { Link } from 'react-router-dom';
import { CardDispatch } from 'App';

import FormInput from 'components/common/FormInput';
import CardPreview from 'components/CardPreview';
import Modal from 'components/common/Modal';
import CardCompany from 'components/CardCompany';
import Button from 'components/common/Button';
import Tooltip from 'components/common/Tooltip';

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
  const { dispatch } = useContext(CardDispatch);
  const [cardInfo, isFullFilled, handleCardInfo] = useCardInfo(initialCardInfo);
  const [modalVisible, handleModal] = useReducer(
    useCallback((visible) => !visible, []),
    false,
  );
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

  const handleClickCompany = useCallback(
    (company, theme) => {
      handleCardInfo({ item: 'company', value: company });
      handleCardInfo({ item: 'theme', value: theme });

      handleModal();
    },
    [handleCardInfo],
  );

  return (
    <div>
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
        <Link
          to={ROUTE.CONFIRM + cardInfo.id}
          onClick={() => dispatch({ type: ACTION.CREATE_CARD, card: cardInfo })}
        >
          <Button theme={theme} className="next-button">
            다음
          </Button>
        </Link>
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
    </div>
  );
};

export default CardAppPage;
