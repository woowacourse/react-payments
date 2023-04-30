import { useNavigate } from 'react-router-dom';
import { ReactComponent as ChevronLeft } from '../../../assets/previous.svg';
import TransParentButton from './TransParentButton';

interface Props {
  fallback?: string;
}

export default function PreviousButton({ fallback = '/' }: Props) {
  const navigate = useNavigate();
  const isPreviousPath = window.history.state?.idx > 0;

  const handleClick = () => {
    if (fallback) {
      navigate(fallback);
      return;
    }
    if (isPreviousPath) {
      navigate(-1);
    }
  };

  return (
    <TransParentButton onClick={handleClick}>
      <ChevronLeft title="이전 페이지로 이동" width={16} height={16} />
    </TransParentButton>
  );
}
