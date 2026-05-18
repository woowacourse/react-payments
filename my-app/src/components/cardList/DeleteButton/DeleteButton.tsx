import { useDeleteCard } from "../../../hooks/queries/useDeleteCard";

type Props = {
  cardId: string;
  onDelete: () => void;
};

const DeleteButton = ({ cardId, onDelete }: Props) => {
  const { remove } = useDeleteCard();

  const handleClick = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    await remove(cardId);
    onDelete();
  };

  return (
    <button onClick={handleClick} aria-label="카드 삭제">×</button>
  );
};

export default DeleteButton;
