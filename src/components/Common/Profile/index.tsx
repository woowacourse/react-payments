import styled from 'styled-components';
import ProfileData from './types';

interface ProfileProps extends ProfileData {
  size?: number;
}

function Profile({ iconUrl, name, size }: ProfileProps) {
  return (
    <StyledProfile size={size}>
      <img src={iconUrl} alt="프로필 이미지" width={size ?? '24px'} />
      {name && <StyledName size={size}>{name}</StyledName>}
    </StyledProfile>
  );
}

const StyledProfile = styled.div<{ size: number | undefined }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: ${({ size }) => size ?? 24}px;
`;

const StyledName = styled.p<{ size: number | undefined }>`
  font-size: ${({ size }) => (size ? size / 3 : 10)}px;
  width: ${({ size }) => (size ? size * 1.5 : 32)}px;
`;

export default Profile;
