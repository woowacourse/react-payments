import * as S from '../confirmPage.style';
import CheckImageIcon from '../../../assets/images/complete.png';

export default function ConfirmImageIcon() {
  return (
    <S.IconContainer>
      <S.IconImageContainer>
        <img src={CheckImageIcon} width={20} height={20} alt="체크 이모티콘 이미지" />
      </S.IconImageContainer>
    </S.IconContainer>
  );
}
