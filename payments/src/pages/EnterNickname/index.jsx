import Card from '../../components/Card';
import Button from '../../components/elements/Button';
import { Input } from '../../components/elements/Input';
import './index.scss';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';

const EnterNickname = () => {
  const { inputStates, updateInputStates } = useContext(UserContext);

  return (
    <div className='enter-nickname__page'>
      <p>카드 등록이 완료 됐습니다.</p>
      <p className='enter-nickname__comment'>카드 별칭을 등록해 주세요.</p>
      <Card state={inputStates}></Card>
      <Input className='enter-nickname__input' placeholder='카드이름입력란'></Input>
      <div className='enter__button'>
        <Button className='confirm__button'>확인</Button>
      </div>
    </div>
  );
};

export default EnterNickname;
