import BackwardButton from '../../components/BackwardButton/BackwardButton';
import CardForm from '../../components/CardForm/CardForm';
import Content from '../../components/Layout/Content/Content';
import Header from '../../components/Layout/Header/Header';

const CardRegistrationPage = () => {
  return (
    <>
      <Header>
        <BackwardButton />
        <h2>카드 추가</h2>
      </Header>
      <Content>
        <CardForm />
      </Content>
    </>
  );
};

export default CardRegistrationPage;
