import { useState } from 'react';
import { Header } from './components/Page/Header';
import { Page } from './components/Page';
import { CardList } from './components/Page/Body/CardList';
import { CardRegister } from './components/Page/Body/CardRegister';
import { CardRegistered } from './components/Page/Body/CardRegistered';

const ChildComponents = {
  cardRegister: [<CardRegister />, <Header titleText={'카드 추가'} hasButton={true} />],
  cardRegistered: [
    <CardRegistered
      card={{
        company: '로이드',
        numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
        owner: 'SUN',
        validDay: { firstDigit: '04', secondDigit: '21' },
      }}
    />,
  ],
  cardList: [
    <CardList
      cards={[
        {
          company: '포코',
          numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
          owner: 'SUN',
          validDay: { month: '04', year: '21' },
          nickName: '엄카',
        },
        {
          company: '로이드',
          numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
          owner: 'SUN',
          validDay: { month: '04', year: '21' },
          nickName: '법카',
        },
        {
          company: '로이드',
          numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
          owner: 'SUN',
          validDay: { month: '04', year: '21' },
          nickName: '법카',
        },
        {
          company: '로이드',
          numbers: { first: '1111', second: '2222', third: '3333', fourth: '4444' },
          owner: 'SUN',
          validDay: { month: '04', year: '21' },
          nickName: '법카',
        },
      ]}
    />,
    <Header titleText={'보유카드'} hasButton={false} />,
  ],
};

function App() {
  const [currentPage, setCurrentPage] = useState('cardList');

  return (
    <div className="App">
      <Page>{ChildComponents[currentPage]}</Page>
    </div>
  );
}

export default App;
