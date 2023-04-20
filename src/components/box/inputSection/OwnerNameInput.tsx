import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputStateProps } from '../../../types';

const OwnerNameInput = (props: InputStateProps) => {
  const inputs: InputType[] = [
    { textType: 'text', maxLength: 30, placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' },
  ];
  return (
    <InputSectionTemplate
      label="카드 소유자 이름(선택)"
      isCountLength
      inputValues={props.inputValues as string}
      maxLength={inputs[0].maxLength}
    >
      <InputBox inputs={inputs} align="left" isFullWidth {...props} />
    </InputSectionTemplate>
  );
};

export default OwnerNameInput;
