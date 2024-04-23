import styled from 'styled-components';
import { CardContainer } from './common/container.style';

interface Props {
  cvc: string;
}

export default function CardBackView({ cvc }: Props) {
  return (
    <CardBackContainer>
      <CvcLine>
        <CvcNumber>{cvc}</CvcNumber>
      </CvcLine>
    </CardBackContainer>
  );
}

const CardBackContainer = styled(CardContainer)`
  background-color: #d5d5d5;
  position: relative;
`;

const CvcLine = styled.div`
  position: absolute;
  top: 60%;
  width: 100%;
  height: 24px;
  background-color: #cbba64;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CvcNumber = styled.p`
  font-size: 16px;
  margin-right: 20px;
`;
