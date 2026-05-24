import styled from "@emotion/styled";
import { cardsApi } from "../../api/cardsApi";
interface Props {
  id: string;
  onDelete: () => void;
}

export default function DeleteCardButton({ id, onDelete }: Props) {
  const handleClick = async () => {
    if (!window.confirm("카드를 삭제할까요?")) return;

    try {
      const res = await cardsApi.delete(id);
      if (!res.ok) throw new Error();
      onDelete();
    } catch {
      alert("카드 삭제에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    }
  };
  return (
    <div>
      <DeleteButton
        src={`${import.meta.env.BASE_URL}X.svg`}
        onClick={handleClick}
        aria-label="삭제"
      />
    </div>
  );
}

const DeleteButton = styled.img`
  cursor: pointer;
`;
