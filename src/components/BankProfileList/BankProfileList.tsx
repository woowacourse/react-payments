import { ReactComponent as BC } from '../../assets/bc.svg';
import { ReactComponent as Shinhan } from '../../assets/shinhan.svg';
import { ReactComponent as Kakao } from '../../assets/kakao.svg';
import { ReactComponent as Hyundai } from '../../assets/hyundai.svg';
import { ReactComponent as Woori } from '../../assets/woori.svg';
import { ReactComponent as Lotte } from '../../assets/lotte.svg';
import { ReactComponent as Hana } from '../../assets/hana.svg';
import { ReactComponent as KB } from '../../assets/kb.svg';
import BankProfileButton from '../BankProfileButton';
import styled from 'styled-components';
import type { CardType } from '../../domain/types/card';

const BANK_LIST = [
  { name: 'BC카드', profile: <BC width={40} height={40} /> },
  { name: '신한카드', profile: <Shinhan width={40} height={40} /> },
  { name: '카카오카드', profile: <Kakao width={40} height={40} /> },
  { name: '현대카드', profile: <Hyundai width={40} height={40} /> },
  { name: '우리카드', profile: <Woori width={40} height={40} /> },
  { name: '롯데카드', profile: <Lotte width={40} height={40} /> },
  { name: '하나카드', profile: <Hana width={40} height={40} /> },
  { name: '국민카드', profile: <KB width={40} height={40} /> },
];

type BankProfileListProps = {
  setCardType: React.Dispatch<React.SetStateAction<CardType>>;
  closeModal: () => void;
};

const BankProfileList: React.FC<BankProfileListProps> = ({ setCardType, closeModal }) => {
  return (
    <Styled.ProfileList>
      {BANK_LIST.map(({ name, profile }) => {
        return (
          <Styled.ProfileItem key={name}>
            <BankProfileButton
              name={name}
              onClick={() => {
                setCardType(name as CardType);
                closeModal();
              }}
            >
              {profile}
            </BankProfileButton>
          </Styled.ProfileItem>
        );
      })}
    </Styled.ProfileList>
  );
};

export default BankProfileList;

const ProfileList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px 00;
`;

const ProfileItem = styled.li`
  flex: 25%;
  display: flex;
  justify-content: center;
`;

const Styled = {
  ProfileList,
  ProfileItem,
};
