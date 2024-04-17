import styled from 'styled-components';
import Input from './common/Input';

interface CardholderNameContainerProps {
  cardholderName: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateErrorMessage: () => void;
  errorMessage: string;
}

const CardholderNameContainer = ({
  cardholderName,
  handleChange,
  updateErrorMessage,
  errorMessage,
}: CardholderNameContainerProps) => {
  return (
    <>
      <h1>카드 소유자 이름을 입력해주세요</h1>
      <label htmlFor="cardholder-name-input">소유자 이름</label>
      <Input
        id="cardholder-name-input"
        isError={!!errorMessage}
        value={cardholderName}
        onChange={handleChange}
        onBlur={updateErrorMessage}
        placeholder="카드 소유자 이름을 입력해주세요"
        width="100%"
      />
      <ErrorText>{errorMessage}</ErrorText>
    </>
  );
};

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
`;

export default CardholderNameContainer;
