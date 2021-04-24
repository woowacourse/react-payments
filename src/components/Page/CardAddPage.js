import React from 'react';
import BackButton from '../BackButton/BackButton';
import Card from '../Card/Card';
import Input from '../Input/Input';
import InputContainer from '../InputContainer/InputContainer';
import TextButton from '../TextButton/TextButton';
import Tooltip from '../Tooltip/Tooltip';

const CardAddPage = () => {
  return (
    <div className="p-5">
      <div className="flex  items-center">
        <BackButton />
        <h1 className="text-xl ml-4">카드 추가</h1>
      </div>
      <div className="flex  justify-center my-7">
        <Card name={'NAME'} expiration={'11/11'} bank={'로이드 은행'} cardNumbers="1234567890123456" />
      </div>
      <form className="relative">
        <InputContainer title={'카드 번호'}>
          <Input type={'number'} maxLength={16} />
        </InputContainer>

        <InputContainer title={'만료일'}>
          <Input width={'half'} type={'number'} maxLength={4} />
        </InputContainer>

        <InputContainer title={'카드 소유자 이름(선택)'}>
          <Input maxLength={10} />
        </InputContainer>

        <InputContainer title={'보안코드(CVC/CVV)'}>
          <Input width={'quarter'} type={'number'} maxLength={3} />
          <Tooltip content={<img className="" src="images/CVC.png" alt="tooltip cvc images" />} />
        </InputContainer>

        <InputContainer title={'카드 비밀번호'}>
          <Input width={'small'} type={'number'} maxLength={1} />
          <Input width={'small'} type={'number'} maxLength={1} />
        </InputContainer>

        <TextButton text={'다음'} />
      </form>
    </div>
  );
};

export default CardAddPage;
