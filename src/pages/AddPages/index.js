import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AddCompletePage } from './AddCompletePage';
import { AddFormPage } from './AddFormPage';
import { ROUTE } from '../../constants';

const initialCardInfo = {
  number: { first: '', second: '', third: '', fourth: '' },
  company: { name: '', color: '' },
  expirationDate: { month: '', year: '' },
  ownerName: '',
  isOwnerNameFilled: false,
  securityCode: '',
  password: { first: '', second: '' },
  nickname: '',
};

export const AddPages = (props) => {
  const { addCardInfoToList } = props;
  const [cardInfo, setCardInfo] = useState(initialCardInfo);

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTE.ADD}>
          <AddFormPage initialCardInfo={initialCardInfo} cardInfo={cardInfo} setCardInfo={setCardInfo} />
        </Route>
        <Route path={ROUTE.ADD_COMPLETE}>
          <AddCompletePage
            initialCardInfo={initialCardInfo}
            cardInfo={cardInfo}
            setCardInfo={setCardInfo}
            addCardInfoToList={addCardInfoToList}
          />
        </Route>
      </Switch>
    </Router>
  );
};
