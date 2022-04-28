import { useState, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import FormInput from '../components/common/FormInput';
import CardPreview from '../components/CardPreview';
import Modal from '../components/common/Modal';
import CardCompany from '../components/CardCompany';
import Header from '../components/common/Header';
import Button from '../components/common/Button';

import { ReactComponent as PrevIcon } from '../assets/prev_icon.svg';
import Tooltip from '../components/common/Tooltip';

const cardNumberInputInfoList = [
  { id: uuid(), type: 'text', className: 'mr-n15 tracking-wide', name: 'first' },
  { id: uuid(), type: 'text', className: 'mr-n15 tracking-wide', name: 'second' },
  { id: uuid(), type: 'password', className: 'mr-n15 tracking-wide', name: 'third' },
  { id: uuid(), type: 'password', className: 'tracking-wide', name: 'fourth' },
];

const expiryDateInputInfoList = [
  { id: uuid(), type: 'text', placeholder: 'MM', className: 'mr-n15', name: 'month' },
  { id: uuid(), type: 'text', placeholder: 'YY', name: 'year' },
];

const cardOwnerNameInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    className: 'text-left',
  },
];

const privacyCodeInputInfoList = [
  { id: uuid(), type: 'password', className: 'w-25 tracking-wide' },
];

const cardPasswordInputInfoList = [
  { id: uuid(), type: 'password', className: 'w-5', name: 'first' },
  { id: uuid(), type: 'password', className: 'w-5', name: 'second' },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5 input-disabled',
    isDisabled: true,
    name: 'third',
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5 input-disabled',
    isDisabled: true,
    name: 'fourth',
  },
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
    third: '*',
    fourth: '*',
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
        <div className="owner-name-length">{ownerName.length} / 30</div>
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
      {/* TODO : 추후, visible에 따른 렌더링 여부 적용 */}
      <Button theme={theme} className="next-button">
        다음
      </Button>
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
