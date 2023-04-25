import styled from 'styled-components';
import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputStateProps } from '../../../abstracts/types';
import HelpButtonImage from '../../../assets/HelpButtonImage';

const SecurityCodeInput = (props: InputStateProps) => {
  const inputs: InputType[] = [{ textType: 'number', maxLength: 3, required: true, textSecurity: true }];
  return (
    <InputSectionTemplate label="보안 코드(CVC/CVV)">
      <InputBox inputs={inputs} align="center" {...props} />
      <HelpButton>
        <HelpButtonImage />
      </HelpButton>
    </InputSectionTemplate>
  );
};

export default SecurityCodeInput;

const HelpButton = styled.div`
  margin-left: 6px;
  cursor: pointer;
  position: relative;
  &:hover::before {
    content: '카드 뒷면에 입력 된 마지막 숫자 3자리를 입력해주세요.';
    left: 40px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;

    width: 130px;
    height: 50px;
    padding: 0 10px;
    background: #ecebf1;
    border-radius: 7px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px;
    font-weight: 500;
    color: #525252;
  }
`;
