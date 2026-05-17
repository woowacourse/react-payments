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
      <img src="/x.svg" onClick={handleClick} />
    </div>
  );
}
