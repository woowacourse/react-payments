import { Page } from '../../types';
import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import PageTemplate from '../template/PageTemplate';
import Card from '../common/Card';

import { useCardForm } from '../../context/CardFormContext';

interface Props {
  navigate: (page: Page) => void;
}

const CardLoadingPage = ({ navigate }: Props) => {
  const [{ cardCompany, cardNumber, expireDate, ownerName }] = useCardForm();

  useEffect(() => {
    setTimeout(() => {
      navigate(Page.name);
    }, 1500);
  }, []);

  return (
    <PageTemplate>
      <Card cardCompany={cardCompany} cardNumber={cardNumber} ownerName={ownerName} expireDate={expireDate} />
      <Spinner />
    </PageTemplate>
  );
};

export default CardLoadingPage;

const rotate = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  position: absolute;
  top: 40vh;

  width: 64px;
  height: 64px;
  border: 3px solid rgba(0, 0, 0, 0.8);
  border-radius: 50%;
  border-top-color: rgba(0, 0, 0, 0.2);

  animation: ${rotate} 1s infinite;
`;
