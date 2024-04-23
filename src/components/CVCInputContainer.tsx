import { ErrorText, ErrorWrapper } from '../styles/common';
import Input from './common/Input';
import InputSection from './common/InputSection';

export interface ICVCInputContainerProps {}

const CVCInputContainer = (props: ICVCInputContainerProps) => {
  return (
    <div>
      <InputSection title="CVC 번호를 입력해 주세요" labelFor="CVC" labelText="CVC">
        <Input placeholder="123" maxLength={3} />
      </InputSection>
      <ErrorWrapper>
        <ErrorText>카드 소유자 이름을 영어로만 입력해주세요</ErrorText>
      </ErrorWrapper>
    </div>
  );
};

export default CVCInputContainer;
