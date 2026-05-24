import { useNavigate } from 'react-router';
import CommonButton from '../../../common/CommonButton/CommonButton';
import {
  EmptyCardPreview,
  EmptyDescription,
  EmptyListContainer,
  EmptyTitle,
} from './CardListEmpty.styles';

function CardListEmpty() {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate('/add');
  }

  return (
    <EmptyListContainer>
      <EmptyCardPreview />
      <EmptyTitle>등록된 카드가 없습니다</EmptyTitle>
      <EmptyDescription>
        아래 버튼을 눌러 첫 카드를 등록해보세요
      </EmptyDescription>
      <CommonButton handleOnClick={handleOnClick} label="카드 추가하기" />
    </EmptyListContainer>
  );
}

export default CardListEmpty;
