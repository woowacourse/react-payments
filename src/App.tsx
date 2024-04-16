import './App.css';
import Input from './components/common/Input';
import styled from 'styled-components';
import useInput from './hooks/useInput';

const inquireCardholderName = (cardholderName: string) => {
  const isValidLength = cardholderName.length < 101;
  if (!isValidLength) {
    return '카드 소유자 이름은 100자 이하로 입력해주세요';
  }

  const isEnglish = /^[a-zA-Z]*$/.test(cardholderName);
  if (!isEnglish) {
    return '카드 소유자 이름은 영어로 입력해주세요';
  }
  return '';
};

const App = () => {
  const { value: cardholderName, handleChange, errorMessage } = useInput('', inquireCardholderName);

  return (
    <>
      <h1>카드 소유자 이름을 입력해주세요</h1>
      <label htmlFor="cardholder-name-input">소유자 이름</label>
      <Input
        id="cardholder-name-input"
        value={cardholderName}
        handleChange={handleChange}
        isError={!!errorMessage}
        placeholder="카드 소유자 이름을 입력해주세요"
      />
      <ErrorText>{errorMessage}</ErrorText>
    </>
  );
};

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

export default App;
