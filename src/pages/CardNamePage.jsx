import Header from 'components/Header/Header';
import PageTitle from 'components/common/PageTitle/PageTitle';
import Main from 'components/Main/Main';
import Card from 'components/common/Card/Card';
import CardNameInputForm from 'components/CardNameInputForm/CardNameInputForm';
import CardName from 'components/CardName/CardName';
import Button from 'components/common/Button/Button';

import { CardInfoContext } from 'contexts/CardInfoContextProvider';
import { useContext } from 'react';

function CardNamePage() {
  const { state } = useContext(CardInfoContext);
  const cardInputs = state.inputs;

  return (
    <div className="app flex-column-center">
      <Header>
        <PageTitle title="카드등록이 완료되었습니다."></PageTitle>
      </Header>
      <Main>
        <Card cardInfo={cardInputs} />
        <CardNameInputForm>
          <CardName />
          <Button text="확인" />
        </CardNameInputForm>
      </Main>
    </div>
  );
}

export default CardNamePage;
