import Button from '../components/common/Button/Button';
import Header from '../components/common/Header/Header';
import Input from '../components/common/Input/Input';

function CardAddPage() {
  return (
    <>
      <Header content="카드 추가" isOverlayPage={true} />
      <Input
        label="카드 소유자 이름"
        type="text"
        name="owner-name"
        id="owner-name"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
      <Button onClick={() => console.log('clicked')} className="submit-button" primary={true}>
        완료
      </Button>
    </>
  );
}

export default CardAddPage;
