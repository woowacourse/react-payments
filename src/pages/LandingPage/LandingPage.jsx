import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CardPreview from '../../components/CardPreview/CardPreview';
import Header from '../../components/Layout/Header/Header';
import Content from '../../components/Layout/Content/Content';
import CardRegistrationButton from '../../components/CardRegistrationButton/CardRegistrationButton';
import CardsContext from '../../contexts/CardsContext';
import * as S from './LandingPage.styled';

const LandingPage = () => {
  const { cardList } = useContext(CardsContext);

  return (
    <>
      <Header>
        <h2>보유카드</h2>
      </Header>
      <Content>
        <S.CardList>
          {cardList &&
            cardList.map(({ id, alias, ...cardInfo }) => (
              <li key={id}>
                <CardPreview {...cardInfo} />
                <p className="card-alias">{alias}</p>
              </li>
            ))}
          <li>
            <Link to="/register">
              <CardRegistrationButton />
            </Link>
          </li>
        </S.CardList>
      </Content>
    </>
  );
};

export default LandingPage;
