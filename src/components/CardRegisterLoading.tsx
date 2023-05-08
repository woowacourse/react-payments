import styled from 'styled-components';
import CardLoader from './CardLoader';

const CardRegisterLoading = () => {
  return (
    <CardLoadingWrapper>
      <CardLoader />
      <span>카드를 등록 중입니다.</span>
    </CardLoadingWrapper>
  );
};

const CardLoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 130px;

  > span {
    margin-top: 40px;
  }
`;

export default CardRegisterLoading;
