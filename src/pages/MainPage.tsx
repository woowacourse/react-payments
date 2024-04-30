import CardInfo from '../components/CardInfo';
import CardPreview from '../components/CardPreview';
import * as M from './style/MainPage.style';
import { useContext } from 'react';
import { CardInfoContext } from '../context/CardInfoContext';

const MainPage = () => {
  const { cardInfo, changeCardInfo } = useContext(CardInfoContext);

  return (
    <M.Container>
      <M.Main>
        <CardPreview {...cardInfo} />
        <CardInfo changeCardInfo={changeCardInfo} />
      </M.Main>
    </M.Container>
  );
};

export default MainPage;
