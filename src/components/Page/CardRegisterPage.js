import React from 'react';
import Card from '../Card/Card';
import CardNameInput from '../CardNameInput/CardNameInput';
import TextButton from '../TextButton/TextButton';

const CardRegisterPage = (props) => {
  return (
    <div className="h-full p-5 flex flex-col items-center relative">
      <h1 className="mt-20 text-2xl text-gray-600">카드 등록이 완료되었습니다.</h1>
      <div className="mt-20 mb-10">
        <Card
          cardNumbers={{
            0: '1234',
            1: '1234',
            2: '1234',
            3: '1234',
          }}
          cardCompany={{ name: '로이드카드' }}
          expiration={'11/11'}
          size={'large'}
        />
      </div>
      <CardNameInput />
      <div className="mt-40 ">
        <TextButton text={'완료'} />
      </div>
    </div>
  );
};

export default CardRegisterPage;
