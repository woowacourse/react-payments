import Card from "../components/Card";
import CardInputForm from "../components/CardInputForm";
import Header from "../components/common/Header";
import Page from "../components/common/Page";

const AddCard = () => {
  return (
    <Page>
      <Header title="카드 추가" isBack={true} />
      <Card color="pink" name="KANG" expiredDate={12} cardNumber={11111111} />
      <CardInputForm />
    </Page>
  );
};

export default AddCard;
