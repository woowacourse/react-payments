import styled from 'styled-components';
import { ReactComponent as BCIcon } from '../../assets/bc_icon.svg';
import { ReactComponent as HyundaiIcon } from '../../assets/hyundai_icon.svg';
import { ReactComponent as HanaIcon } from '../../assets/hana_icon.svg';
import { ReactComponent as KakaoIcon } from '../../assets/kakao_icon.svg';
import { ReactComponent as KookminIcon } from '../../assets/kookmin_icon.svg';
import { ReactComponent as LotteIcon } from '../../assets/lotte_icon.svg';
import { ReactComponent as ShinhanIcon } from '../../assets/shinhan_icon.svg';
import { ReactComponent as WooriIcon } from '../../assets/woori_icon.svg';
import { Dispatch, SetStateAction } from 'react';
import { Bank } from 'types/Card';

interface CardBankListProps {
  setBank: Dispatch<SetStateAction<Bank>>;
  setModal: Dispatch<SetStateAction<boolean>>;
}

const banks = [
  { Icon: BCIcon, name: 'BC카드', color: '#C03841' },
  { Icon: HyundaiIcon, name: '현대카드', color: '#222222' },
  { Icon: HanaIcon, name: '하나카드', color: '#009490' },
  { Icon: KakaoIcon, name: '카카오뱅크', color: '#fae20c' },
  { Icon: KookminIcon, name: '국민카드', color: '#685E54' },
  { Icon: LotteIcon, name: '롯데카드', color: '#ED1C24' },
  { Icon: ShinhanIcon, name: '신한카드', color: '#0046FF' },
  { Icon: WooriIcon, name: '우리카드', color: '#007BC8' },
];

const CardBankList = (props: CardBankListProps) => {
  const { setBank, setModal } = props;

  const handleBank = (name: string, color: string) => {
    setBank({ bank: name, color: color });
    setModal(false);
  };

  return (
    <Container>
      {banks.map(({ Icon, name, color }) => (
        <IconContainer key={name} onClick={() => handleBank(name, color)}>
          <Icon />
          <IconName>{name}</IconName>
        </IconContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  gap: 20px;
  padding: 10px 20px;
  justify-items: center;
  width: 100%;
  height: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const IconName = styled.span`
  margin: 15px 0 15px 0;
  font-size: 14px;
`;

export default CardBankList;
