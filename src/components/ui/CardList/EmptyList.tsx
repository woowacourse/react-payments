import { css } from '@emotion/react';
import Button from '../Button';
import StatusView from '../StatusView';

interface EmptyListProps {
  onAddCard: () => void;
}

export default function EmptyList({ onAddCard }: EmptyListProps) {
  return (
    <StatusView
      visual={<div css={emptyCardStyle} />}
      title="등록된 카드가 없습니다"
      description="아래 버튼을 눌러 첫 카드를 등록해보세요"
      action={<Button onClick={onAddCard}>카드 추가하기</Button>}
    />
  );
}

const emptyCardStyle = css`
  width: 160px;
  height: 100px;
  border: 1px dashed #d9d9d9;
  background-color: #f5f5f5;
  border-radius: 5px;
`;
