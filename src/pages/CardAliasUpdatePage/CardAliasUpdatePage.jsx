import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import CardAliasUpdateForm from '../../components/CardAliasUpdateForm/CardAliasUpdateForm';
import CardPreview from '../../components/CardPreview/CardPreview';
import Content from '../../components/Layout/Content/Content';
import CardsContext from '../../contexts/CardsContext';
import * as S from './CardAliasUpdatePage.styled';

const CardAliasUpdatePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { updateCard } = useContext(CardsContext);

  const onSubmit = ({ target }) => {
    const formData = new FormData(target);
    const alias = formData.get('alias').trim();

    if (alias !== '') {
      const cardInfo = Object.fromEntries(formData);

      updateCard(state.id, cardInfo);
    }

    navigate('/');
  };

  return (
    <Content>
      <S.VerticalGridBox>
        <S.Title>카드등록이 완료되었습니다.</S.Title>
        <CardPreview size="big" {...state} />
        <CardAliasUpdateForm onSubmit={onSubmit} />
      </S.VerticalGridBox>
    </Content>
  );
};

export default CardAliasUpdatePage;
