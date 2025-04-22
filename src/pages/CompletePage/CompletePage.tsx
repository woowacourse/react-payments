import { useNavigate } from 'react-router-dom';
import Button from '@/components/Button/Button';
import * as S from './CompletePage.styles';

export default function CompletePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <S.Wrapper>
      <S.Title>카드 등록이 완료되었습니다</S.Title>
      <S.Description>
        등록하신 카드로 결제하실 수 있습니다.
        <br />
        추가로 카드를 등록하시려면 아래 버튼을 눌러주세요.
      </S.Description>
      <S.ButtonWrapper>
        <Button type="button" onClick={handleClick}>
          확인
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
