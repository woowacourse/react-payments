import { Header } from './components/Page/Header';
import { CardList } from './components/Page/Body/CardList';
import { CardRegister } from './components/Page/Body/CardRegister';
import { CardRegistered } from './components/Page/Body/CardRegistered';
import * as Styled from './style.js';
import { useContext } from 'react';
import { PaymentContext } from './contexts/PaymentContextProvider';

function App() {
  const { currentPage, setCurrentPage } = useContext(PaymentContext);

  const Component = {
    cardRegister: {
      header: (
        <Header
          titleText={'카드 추가'}
          hasButton={true}
          onClick={() => setCurrentPage('cardList')}
        />
      ),
      body: <CardRegister />,
    },
    cardRegistered: {
      header: null,
      body: <CardRegistered />,
    },
    cardList: {
      header: <Header titleText={'보유카드'} hasButton={false} />,
      body: <CardList />,
    },
  };

  return (
    <Styled.Page>
      <Styled.Header>{Component[currentPage].header}</Styled.Header>
      <Styled.Body>{Component[currentPage].body}</Styled.Body>
    </Styled.Page>
  );
}

export default App;
