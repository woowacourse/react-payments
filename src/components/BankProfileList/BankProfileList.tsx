import BankProfileButton from '../BankProfileButton';
import styled from 'styled-components';
import { BANK_LIST } from '../../domain/constants/card';
import type { CardType } from '../../domain/types/card';

type BankProfileListProps = {
  setCardType: React.Dispatch<React.SetStateAction<CardType>>;
  closeModal: () => void;
};

const BankProfileList = ({ setCardType, closeModal }: BankProfileListProps) => {
  return (
    <Styled.ProfileList>
      {BANK_LIST.map(({ name, profile }) => {
        return (
          <Styled.ProfileItem key={name}>
            <BankProfileButton
              name={name}
              onClick={() => {
                setCardType(name);
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
