import { useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import FormInput from '../components/common/FormInput';
import CardPreview from '../components/CardPreview';
import Modal from '../components/common/Modal';
import CardCompany from '../components/CardCompany';

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

const cardCompanyList = [
  { id: uuid(), company: '포코 카드', theme: '#E24141' },
  { id: uuid(), company: '준 카드', theme: '#547CE4' },
  { id: uuid(), company: '공원 카드', theme: '#73BC6D' },
  { id: uuid(), company: '브랜 카드', theme: '#DE59B9' },
  { id: uuid(), company: '로이드 카드', theme: '#04C09E' },
  { id: uuid(), company: '도비 카드', theme: '#E76E9A' },
  { id: uuid(), company: '록바 카드', theme: '#F37D3B' },
  { id: uuid(), company: '무비 카드', theme: '#FBCD58' },
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
  },
  theme: '',
};

//component
const CardAppPage = () => {
  const [cardInfo, setCardInfo] = useState(initialCardInfo);
  const [modalVisible, setModalVisible] = useState(false);
  const { number, ownerName, expiryDate, company, theme } = cardInfo;

  const handleChange = ({ target }, item) => {
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
      />
      <FormInput
        item="privacyCode"
        inputTitle="보안코드(CVC/CVV)"
        inputInfoList={privacyCodeInputInfoList}
        onChange={handleChange}
        cardInfo={cardInfo}
      />
      <FormInput
        item="password"
        inputTitle="카드 비밀번호"
        inputInfoList={cardPasswordInputInfoList}
        cardInfo={cardInfo}
        onChange={handleChange}
      />

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
