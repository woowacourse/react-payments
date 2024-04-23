import InputSection from './common/InputSection';
import { ErrorText, ErrorWrapper } from '../styles/common';
import Input from './common/Input';

export interface IPasswordInputContainerProps {}

export default function PasswordInputContainer(props: IPasswordInputContainerProps) {
  return (
    <div>
      <InputSection
        title="비밀번호를 입력해 주세요"
        subtitle="앞의 2자리를 입력해 주세요"
        labelFor="password"
        labelText="비밀번호 앞 2자리"
      >
        <Input maxLength={2} type="password" />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>카드 소유자 이름을 영어로만 입력해주세요</ErrorText>
      </ErrorWrapper>
    </div>
  );
}
