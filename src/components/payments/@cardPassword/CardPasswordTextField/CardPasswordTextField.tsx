import TextField from '@components/common/TextField/TextField';
import CardPasswordInput from '@components/payments/@cardPassword/CardPasswordInput/CardPasswordInput';

interface CardPasswordTextFieldProps {
  cardPassword: string;
  cardPasswordError: { isError: boolean; errorMessage: string };
  onAddCardPassword: (value: string) => void;
}

const CardPasswordTextField: React.FC<CardPasswordTextFieldProps> = ({
  cardPassword,
  cardPasswordError,
  onAddCardPassword,
}) => {
  return (
    <section>
      <TextField.Title title="비밀번호를 입력해 주세요" />
      <TextField.SubTitle subTitle="앞의 2자리를 입력해주세요" />
      <TextField.Label htmlFor="cardPassword" labelText="비밀번호 앞 2자리" />
      <TextField.Content>
        <CardPasswordInput
          isError={cardPasswordError.isError}
          id="cardPassword"
          value={cardPassword}
          onAddCardPassword={(event) => onAddCardPassword(event.target.value)}
        />
      </TextField.Content>
      <TextField.ErrorText isError={cardPasswordError.isError} errorText={cardPasswordError.errorMessage} />
    </section>
  );
};

export default CardPasswordTextField;
