import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import FormInput from './components/common/FormInput';
import CardPreview from './components/CardPreview';

const cardNumberInputInfoList = [
  { id: uuid(), type: 'text', className: 'mr-n15', name: 'first' },
  { id: uuid(), type: 'text', className: 'mr-n15', name: 'second' },
  { id: uuid(), type: 'password', className: 'mr-n15', name: 'third' },
  { id: uuid(), type: 'password', name: 'fourth' },
];

const expiryDateInputInfoList = [
  { id: uuid(), type: 'text', placeholder: 'MM', className: 'mr-n15', name: 'month' },
  { id: uuid(), type: 'text', placeholder: 'YY', name: 'year' },
];

const cardOwnerNameInputInfoList = [
  { id: uuid(), type: 'text', placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' },
];

const privacyCodeInputInfoList = [{ id: uuid(), type: 'password', className: 'w-25' }];

const cardPasswordInputInfoList = [
  { id: uuid(), type: 'password', className: 'w-15', name: 'first' },
  { id: uuid(), type: 'password', className: 'w-15', name: 'second' },
  { id: uuid(), type: 'password', className: 'w-15' },
  { id: uuid(), type: 'password', className: 'w-15' },
];

function App() {
  const [cardInfo, setCardInfo] = useState({
    company: '클린카드',
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
  });
  const { number, ownerName, expiryDate, company } = cardInfo;

  const onChange = ({ target }, item) => {
    const { name, value } = target;

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

  return (
    <>
      <CardPreview
        number={number}
        ownerName={ownerName}
        expiryDate={expiryDate}
        company={company}
      />
      <FormInput
        item="number"
        inputTitle="카드 번호"
        inputInfoList={cardNumberInputInfoList}
        cardInfo={cardInfo}
        onChange={onChange}
      />
      <FormInput
        className="w-50"
        item="expiryDate"
        inputTitle="만료일"
        inputInfoList={expiryDateInputInfoList}
        cardInfo={cardInfo}
        onChange={onChange}
      />
      <FormInput
        item="ownerName"
        inputTitle="카드 소유자 이름(선택)"
        inputInfoList={cardOwnerNameInputInfoList}
        cardInfo={cardInfo}
        onChange={onChange}
      />
      <FormInput
        item="privacyCode"
        inputTitle="보안코드(CVC/CVV)"
        inputInfoList={privacyCodeInputInfoList}
        onChange={onChange}
        cardInfo={cardInfo}
      />
      <FormInput
        item="password"
        inputTitle="카드 비밀번호"
        inputInfoList={cardPasswordInputInfoList}
        cardInfo={cardInfo}
        onChange={onChange}
      />
    </>
  );
}

export default App;
