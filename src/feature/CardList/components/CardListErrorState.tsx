import { useNavigate } from 'react-router-dom';
import Title from '../../../common/components/Title';
import Description from '../../../common/components/Description';
import Button from '../../../common/components/Button';

import errorImg from './../assets/Error_Icon.png';

type CardListErrorStateProps = {
  message: string;
};

export const CardListErrorState = ({ message }: CardListErrorStateProps) => {
  const navigate = useNavigate();

  const handleRetryFetchCardsClick = () => {
    navigate('/');
  };

  return (
    <div>
      <img src={errorImg} alt="" />
      <Title value="카드 목록을 불러올 수 없어요" />
      <Description value={message} />
      <Button value="다시 시도" onClick={handleRetryFetchCardsClick} />
    </div>
  );
};

export default CardListErrorState;
