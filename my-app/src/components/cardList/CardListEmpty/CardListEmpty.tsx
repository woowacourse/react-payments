import AddCardButton from "../AddCardButton/AddCardButton";

const CardListEmpty = () => {
  return (
    <div>
      <p>등록된 카드가 없습니다</p>
      <AddCardButton variant="primary" />
    </div>
  );
};

export default CardListEmpty;
