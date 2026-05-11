import type {ReactNode} from 'react';
import styled from 'styled-components';

type InfoInputSectionProps = {
  numberSlot: ReactNode;
  expirySlot: ReactNode;
  cvcSlot: ReactNode;
  passwordSlot: ReactNode;
  companySlot: ReactNode;
};

const InfoInputSection = ({numberSlot, companySlot, expirySlot, cvcSlot, passwordSlot}: InfoInputSectionProps) => {
  // 화면 렌더 순서는 입력 순서의 반대이므로 순서가 있는 배열로 만들어 순회 렌더 시 password가 제일 위로 오도록 설계
  const orderedSlots = [passwordSlot, cvcSlot, expirySlot, companySlot, numberSlot];

  return (
    <Container>
      {orderedSlots.map((slot, index) => (
        <Slot key={index}>{slot}</Slot>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
`;

const Slot = styled.div`
  display: contents;
`;

export default InfoInputSection;
