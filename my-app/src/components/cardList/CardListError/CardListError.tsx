type Props = {
  onRetry: () => void;
};

const CardListError = ({ onRetry }: Props) => {
  return (
    <div>
      <p>카드 목록을 불러올 수 없어요</p>
      <button onClick={onRetry}>다시 시도</button>
    </div>
  );
};

export default CardListError;
