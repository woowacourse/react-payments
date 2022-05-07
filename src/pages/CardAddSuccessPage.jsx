import Button from 'components/common/Button/Button';
import Card from 'components/common/Card/Card';
import CardNameInputForm from 'components/CardNameInputForm/CardNameInputForm';
import NoticeMessage from 'components/common/NoticeMessage/NoticeMessage';
import CardNicknameInput from 'components/CardNicknameInput/CardNicknameInput';

function CardAddSuccessPage() {
  return (
    <div className="app">
      <CardNameInputForm>
        <NoticeMessage text="카드등록이 완료되었습니다." />
        <Card />
        <CardNicknameInput />
        <Button text="확인" />
      </CardNameInputForm>
    </div>
  );
}

export default CardAddSuccessPage;
