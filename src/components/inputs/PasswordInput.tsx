import styled from 'styled-components';
import Input from '../common/Input';
import InputBox from '../common/InputBox';
import InputGroup from '../common/InputGroup';
import { DotIcon } from '../../assets/icons';

const PasswordInput = () => {
  return (
    <InputGroup labelValue='카드 비밀번호'>
      <BoxContainer>
        <InputBox width='43px'>
          <Input type='password'></Input>
        </InputBox>
        <InputBox width='43px'>
          <Input type='password'></Input>
        </InputBox>
        <DotIcon />
        <DotIcon />
      </BoxContainer>
    </InputGroup>
  );
};

const BoxContainer = styled.div`
  display: flex;
  gap: 7px;
`;

export default PasswordInput;
