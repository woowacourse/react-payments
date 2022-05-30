import ICONS from '../../constants/icons';
import * as S from './CardRegistrationButton.styled';

const CardRegistration = () => (
  <S.CardPreview className="card-box">
    <div className="empty-card">
      <div className="card-middle">{ICONS.PLUS}</div>
    </div>
  </S.CardPreview>
);

export default CardRegistration;
