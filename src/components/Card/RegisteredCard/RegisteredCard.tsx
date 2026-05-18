import styled from '@emotion/styled';
import { CARD_ISSUER_CONFIG } from '../../../constants';
import { CardItemResponse } from '../../../apis/cards';
import deleteButton from '../../../assets/delete.svg';

interface Props {
  data: CardItemResponse;
  onDelete: (id: string) => void;
}

export default function RegisteredCard({ data, onDelete }: Props) {
  const issuer = Object.values(CARD_ISSUER_CONFIG).filter(
    (issuer) => issuer.issuerCode === data.issuerCode
  )[0];

  return (
    <Wrapper>
      <Issuer $color={issuer.color}></Issuer>

      <Content>
        <Name>{issuer.name}</Name>
        <CardNumber>{data.number}</CardNumber>
        <ExpirationDate>{data.expirationDate}</ExpirationDate>
      </Content>

      <DeleteButton onClick={() => onDelete(data.id)}>
        <img src={deleteButton} alt="delete-button" />
      </DeleteButton>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 320px;
  height: 73px;
  padding: 12px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
`;

const Issuer = styled.div<{ $color: string }>`
  width: 64px;
  height: 40px;
  border-radius: 4px;
  background-color: ${({ $color }) => $color};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 178px;
`;

const Name = styled.strong`
  font-size: 14px;
  font-weight: 700;
  color: #353c49;
`;

const CardNumber = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: #8c8c8c;
`;

const ExpirationDate = styled.span`
  font-size: 9.5px;
  font-weight: 400;
  color: #8c8c8c;
`;

const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
`;
