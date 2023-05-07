import BankProfileButton from '../BankProfileButton';
import styled from 'styled-components';
import { BANK_LIST } from '../../domain/constants/card';
import { useCardContext } from '../../pages/CardRegistration/contexts/CardContext';

type BankProfileListProps = {
  closeModal: () => void;
};

const BankProfileList = ({ closeModal }: BankProfileListProps) => {
  const { setCard } = useCardContext();

  return (
    <Styled.ProfileList>
      {BANK_LIST.map(({ name, profile }) => {
        return (
          <Styled.ProfileItem key={name}>
            <BankProfileButton
              name={name}
              onClick={() => {
                setCard((prev) => ({ ...prev, cardType: name }));
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
