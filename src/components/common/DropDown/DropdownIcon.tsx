import styled from '@emotion/styled';

interface DropdownIconProps {
  toggleOpen: boolean;
}

function DropdownIcon({ toggleOpen }: DropdownIconProps) {
  return (
    <DropdownIconWrapper toggleOpen={toggleOpen}>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.04019 0.729874L4.86012 4.5498L8.68005 0.729874"
          stroke={toggleOpen ? 'black' : 'gray'}
          stroke-width="1.32867"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </DropdownIconWrapper>
  );
}

export default DropdownIcon;

const DropdownIconWrapper = styled.div<{ toggleOpen: boolean }>`
  position: absolute;
  top: 50%;
  right: 2%;

  rotate: ${({ toggleOpen }) => (toggleOpen ? '180deg' : '0')};
  transition: rotate 0.3s ease-in-out;
`;
