import { TextField } from '@components/index';

import { PasswordPrefixInput } from '@pages/payments';

export interface PasswordPrefixTextFieldProps {
  passwordPrefix: string;
  onAddPasswordPrefix: (value: string) => void;
  passwordPrefixState: { isError: boolean; errorMessage: string };
}

const PasswordPrefixTextField: React.FC<PasswordPrefixTextFieldProps> = ({
  passwordPrefix,
  passwordPrefixState,
  onAddPasswordPrefix,
}) => {
  return (
    <section>
      <TextField.Title title="비밀번호를 입력해주세요." />
      <TextField.SubTitle subTitle="앞의 2자리를 입력하세요."></TextField.SubTitle>
      <TextField.Label htmlFor="passwordPrefix" labelText="비밀번호 앞 2자리" />
      <TextField.Content>
        <PasswordPrefixInput
          id="passwordPrefix"
          isError={passwordPrefixState.isError}
          value={passwordPrefix}
          onAddPasswordPrefix={(event) => onAddPasswordPrefix(event.target.value)}
        />
      </TextField.Content>
      <TextField.ErrorText errorText={passwordPrefixState.errorMessage} />
    </section>
  );
};

export default PasswordPrefixTextField;
