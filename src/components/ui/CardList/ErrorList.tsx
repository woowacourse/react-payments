import Button from '../Button';
import StatusView from '../StatusView';
import ExclamationIcon from '../ExclamationIcon';

interface ErrorListProps {
  onRetryFetch: () => void;
}

export default function ErrorList({ onRetryFetch }: ErrorListProps) {
  return (
    <StatusView
      visual={<ExclamationIcon />}
      title="카드 목록을 불러올 수 없어요"
      description="잠시 후 다시 시도해 주세요."
      action={<Button onClick={onRetryFetch}>다시 시도</Button>}
    />
  );
}
