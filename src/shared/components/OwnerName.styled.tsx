import styled from '@emotion/styled';

const OwnerName = styled.span<{ name: string }>(({ name }) => ({
  fontSize: `${Math.min(14, Math.max(4, 20 - Math.floor(name.length / 2)))}px`,
}));

export default OwnerName;
