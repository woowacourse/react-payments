import Button from 'components/common/Button/Button';
import Card from 'components/common/Card/Card';
import CardNameInputForm from 'components/CardNameInputForm/CardNameInputForm';
import NoticeMessage from 'components/common/NoticeMessage/NoticeMessage';
import LineInput from 'components/common/LineInput/LineInput';

function CardAddSuccessPage() {
  return (
    <>
      <CardNameInputForm>
        <NoticeMessage />
        <Card />
        <LineInput />
        <Button text="확인" />
      </CardNameInputForm>
    </>
  );
}

export default CardAddSuccessPage;
