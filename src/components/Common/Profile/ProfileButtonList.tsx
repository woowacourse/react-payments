/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import TransParentButton from '../Button/TransParentButton';
import type ProfileData from './types';
import Profile from '.';

interface ProfileButtonListProps {
  profileList: ProfileData[];
  getProfileName: (name: string) => void;
  profileSize?: number;
  severalPerLine: number;
}

function ProfileButtonList({ profileList, getProfileName, profileSize, severalPerLine }: ProfileButtonListProps) {
  return (
    <StyledList severalPerLine={severalPerLine} profileSize={profileSize ?? 37}>
      {profileList.map(({ iconUrl, name }, index) => (
        <StyledListItem key={index}>
          <TransParentButton onClick={() => getProfileName(name ?? '')}>
            <Profile iconUrl={iconUrl} name={name} size={profileSize} />
          </TransParentButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.li<{ severalPerLine: number; profileSize: number }>`
  display: grid;
  justify-content: center;
  grid-template-columns: ${p => `repeat(${p.severalPerLine}, ${p.profileSize * 2}px)`};
  overflow-y: scroll;
  height: 160px;
  row-gap: 24px;

  @media screen and (max-width: 320px) {
    grid-template-columns: repeat(2, 72px);
  }
`;

const StyledListItem = styled.ul`
  display: flex;
  justify-content: center;
  width: 72px;
`;

export default ProfileButtonList;
