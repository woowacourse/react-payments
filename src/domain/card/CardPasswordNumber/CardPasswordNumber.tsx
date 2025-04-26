import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Input from '../../../components/Input/Input';
import Label from '../../../components/Label/Label';
import Spacing from '../../../components/Spacing/Spacing';
import Title from '../../../components/Title/Title';
import { CardPasswordProps } from './types';

export default function CardPasswordNumber({
  cardPassword,
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
        autoFocus
        id="card-password"
        value={cardPassword}
        onChange={(event) => handleCardPasswordInputChange(event.target.value)}
        isError={cardPasswordErrorMessage !== ''}
      />
      <Spacing size={8} />
      <ErrorMessage>{cardPasswordErrorMessage}</ErrorMessage>
    </div>
  );
}
