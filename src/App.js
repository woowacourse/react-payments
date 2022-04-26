import FormInput from './components/common/FormInput';
import { v4 as uuid } from 'uuid';

const cardNumberInputInfoList = [
  { id: uuid(), type: 'text' },
  { id: uuid(), type: 'text' },
  { id: uuid(), type: 'password' },
  { id: uuid(), type: 'password' },
];

const expiryDateInputInfoList = [
  { id: uuid(), type: 'text', placeholder: 'MM' },
  { id: uuid(), type: 'text', placeholder: 'YY' },
];

const cardOwnerNameInfoList = [
  { id: uuid(), type: 'text', placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' },
];

const privacyCodeInfoList = [{ id: uuid(), type: 'password', className: 'w-25' }];

const cardPasswordInfoList = [
  { id: uuid(), type: 'password', className: 'w-15' },
  { id: uuid(), type: 'password', className: 'w-15' },
  { id: uuid(), type: 'password', className: 'w-15' },
  { id: uuid(), type: 'password', className: 'w-15' },
];

function App() {
  return (
    <>
      <FormInput inputInfoList={cardNumberInputInfoList} inputTitle="카드 번호" />
      <FormInput inputInfoList={expiryDateInputInfoList} className="w-50" inputTitle="만료일" />
      <FormInput inputInfoList={cardOwnerNameInfoList} inputTitle="카드 소유자 이름(선택)" />
      <FormInput inputInfoList={privacyCodeInfoList} inputTitle="보안코드(CVC/CVV)" />
      <FormInput inputInfoList={cardPasswordInfoList} inputTitle="카드 비밀번호" />
    </>
  );
}

export default App;
