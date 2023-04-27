/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import TransParentButton from '../Common/Button/TransParentButton';
import Profile from '../Common/Profile';
import type { Bank } from '../../data/bankList';

interface BankProfileButtonListProps {
  bankList: Bank[];
  getBankName: (name: string) => void;
  profileSize?: number;
}

function BankProfileButtonList({ bankList, getBankName, profileSize }: BankProfileButtonListProps) {
  return (
    <StyledList>
      {bankList.map(({ logo, name }, index) => (
        <StyledListItem key={index}>
          <TransParentButton onClick={() => getBankName(name)}>
            <Profile iconUrl={logo} name={name} size={profileSize} />
          </TransParentButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.li`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 72px);
  overflow-y: scroll;
  height: 160px;
  row-gap: 24px;

  & > ul {
    width: 72px;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(2, 72px);
  }
`;

const StyledListItem = styled.ul`
  display: flex;
  justify-content: center;
`;

export default BankProfileButtonList;
