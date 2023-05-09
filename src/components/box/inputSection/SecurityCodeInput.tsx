import styled from 'styled-components';

import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

import { useCardForm } from '../../../context/CardFormContext';

interface Props {
  insert: (index: number) => (element: HTMLInputElement | null) => void;
  focus: (index: number) => (go: number) => void;
}

const SecurityCodeInput = ({ insert, focus }: Props) => {
  const [{ securityCode }, dispatch] = useCardForm();

  const setSecurityCode = (value: string) => {
    dispatch({ type: 'SET_VALUE', key: 'securityCode', value });
  };

  return (
    <InputSectionTemplate label="보안 코드(CVC/CVV)">
      <InputBox align="center">
        <Input
          textType="number"
          value={securityCode}
          setValue={setSecurityCode}
          length={3}
          required
          textSecurity
          insert={insert(7)}
          focus={focus(7)}
        />
      </InputBox>
      <HelpButton>
        <img src="./icons/HelpButtonIcon.svg" alt="HelpButtonIcon" />
      </HelpButton>
    </InputSectionTemplate>
  );
};

export default SecurityCodeInput;

const HelpButton = styled.div`
  position: relative;

  margin-left: 6px;

  cursor: pointer;

  &:hover::before {
    content: '카드 뒷면에 입력 된 마지막 숫자 3자리를 입력해주세요.';
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 130px;
    height: 50px;
    padding: 0 10px;

    background: #ecebf1;
    border-radius: 7px;

    font-size: 12px;
    font-weight: 500;
    color: #525252;
  }
`;
