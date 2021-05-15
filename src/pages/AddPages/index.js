import { Switch, Route } from 'react-router-dom';
import { AddCompletePage } from './AddCompletePage';
import { AddFormPage } from './AddFormPage';
import { ROUTE } from '../../constants';
import { CardInfoContextProvider } from '../../contexts';

export const AddPages = () => {
  return (
    <CardInfoContextProvider>
      <Switch>
        <Route exact path={ROUTE.ADD}>
          <AddFormPage />
        </Route>
        <Route path={ROUTE.ADD_COMPLETE}>
          <AddCompletePage />
        </Route>
      </Switch>
    </CardInfoContextProvider>
  );
};
