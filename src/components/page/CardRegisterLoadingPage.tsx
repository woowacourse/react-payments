import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/cardanimating.json';
import PageTemplate from '../template/PageTemplate';
import styled from 'styled-components';
import { useEffect } from 'react';
import { Page, PageProps } from '../../abstracts/types';

const CardRegisterLoadingPage = ({ navigate }: PageProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    setTimeout(() => {
      navigate(Page.list);
    }, 3000);
  }, [navigate]);

  return (
    <PageTemplate>
      <Lottie options={defaultOptions} height={300} width={300} isClickToPauseDisabled={true} />
      <CardLoadingWrapper>
        <CardLoadingText>카드를 등록중입니다.</CardLoadingText>
      </CardLoadingWrapper>
    </PageTemplate>
  );
};

export default CardRegisterLoadingPage;

const CardLoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 42px;
`;

const CardLoadingText = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #575757;
  opacity: 0.9;
`;
