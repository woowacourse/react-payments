import * as styled from './MyCardPage.styled';
import CardList from '../../CardList/CardList';
import CardRegisterButtonContainer from '../../CardRegisterButtonContainer/CardRegisterButtonContainer';

const MyCardPage = () => {
  return (
    <styled.MyCardPage>
      <CardList />
      <CardRegisterButtonContainer />
    </styled.MyCardPage>
  );
};

export default MyCardPage;
