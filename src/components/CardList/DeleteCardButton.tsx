import styled from "@emotion/styled";
interface Props {
  id: string;
  onDelete: () => void;
}

export default function DeleteCardButton({ id, onDelete }: Props) {
  const handleClick = async () => {
    if (!window.confirm("카드를 삭제할까요?")) return;

    await fetch(`/cards/${id}`, { method: "DELETE" });
    onDelete();
  };
  return (
    <div>
      <DeleteButton
        src={`${import.meta.env.BASE_URL}X.svg`}
        onClick={handleClick}
      />
    </div>
  );
}

const DeleteButton = styled.img`
  cursor: pointer;
`;
