import Title from '../../../common/components/Title';
import Description from '../../../common/components/Description';
import Button from '../../../common/components/Button';

import errorImg from './../assets/Error_Icon.png';
import styled from 'styled-components';

export type CardListErrorStatePropsType = {
  handleRetryFetchCards: () => void;
};

export const CardListErrorState = ({
  handleRetryFetchCards,
}: CardListErrorStatePropsType) => {
  return (
    <Wrapper>
      <ErrorImage src={errorImg} alt="" />
      <Title value="카드 목록을 불러올 수 없어요" />
      <Description value="잠시 후에 다시 시도해주세요" />
      <Button value="다시 시도" onClick={() => handleRetryFetchCards()} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 150px;
  gap: 15px;

  width: 100%;
`;

const ErrorImage = styled.img``;

export default CardListErrorState;
