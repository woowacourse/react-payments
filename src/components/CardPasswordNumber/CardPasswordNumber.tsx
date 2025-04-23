import ErrorMessage from '../common/ErrorMessage/ErrorMessage';
import Input from '../common/Input/Input';
import Label from '../common/Label/Label';
import Spacing from '../common/Spacing/Spacing';
import Title from '../common/Title/Title';
import { CardPasswordProps } from './type';

export default function CardPasswordNumber({
  CardPassword,
  cardPasswordErrorMessage,
  handleCardPasswordInputChange,
}: CardPasswordProps) {
  return (
    <div>
      <Title description="앞의 2자리를 입력해주세요">비밀번호를 입력해 주세요</Title>
      <Spacing size={24} />
      <Label id="card-password">비밀번호</Label>
      <Spacing size={8} />
      <Input
        type="password"
        maxLength={2}
        id="card-password"
        value={CardPassword}
        onChange={(event) => handleCardPasswordInputChange(event.target.value)}
        isError={cardPasswordErrorMessage !== ''}
      />
      <Spacing size={8} />
      <ErrorMessage>{cardPasswordErrorMessage}</ErrorMessage>
    </div>
  );
}
