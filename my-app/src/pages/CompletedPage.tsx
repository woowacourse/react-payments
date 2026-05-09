import { useLocation } from "react-router-dom";

export default function CompletedPage() {
  const { state } = useLocation();
  const { cardInfo } = state;

  return (
    <div>
      {cardInfo.numbers[0]}로 시작하는 {cardInfo.company} 카드가 등록되었습니다.
    </div>
  );
}
