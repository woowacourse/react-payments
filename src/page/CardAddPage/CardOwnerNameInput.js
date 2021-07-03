import React, { useContext } from 'react';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import { PaymentsContext } from '../../contexts/PaymentsContextProvider';

const CardOwnerNameInput = () => {
  const { ownerName } = useContext(PaymentsContext);

  return (
    <InputContainer
      title={'카드 소유자 이름(선택)'}
      bgColor={'bg-gray-250'}
      count={ownerName.value.length}
      width={'w-full'}
    >
      <Input
        minLength={0}
        length={30}
        placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
        value={ownerName.value}
        onChange={ownerName.handleChange}
        required={false}
        className={'px-4'}
      />
    </InputContainer>
  );
};

export default CardOwnerNameInput;
