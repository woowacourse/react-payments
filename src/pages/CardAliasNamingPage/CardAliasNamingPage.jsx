import React from 'react';
import { useLocation } from 'react-router-dom';
import CardPreview from '../../components/CardPreview/CardPreview';

const CardAliasNamingPage = () => {
  const { state } = useLocation();

  return (
    <div>
      <h2>카드 등록이 완료되었습니다.</h2>
      <CardPreview {...state} />
      <input />
    </div>
  );
};

export default CardAliasNamingPage;
