import styled from "styled-components";
import { useState } from "react";

import { HELP_MESSAGE } from "constants/index";
import { RowFlexWrapper } from "styles/wrapper";
import Box from "styles/box";

const HelpIcon = styled(RowFlexWrapper)`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.helpboxBorder};
  color: ${({ theme }) => theme.colors.helpboxText};
  font-size: 20px;
  padding-top: 1px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: ${({ theme }) => theme.colors.helpboxHover};
    border: 1px solid white;
  }
`;

const HelpModal = styled.div`
  position: absolute;
  padding: 10px 20px;
  width: 200px;
  left: 20px;
  top: 25px;
  background-color: ${({ theme }) => theme.colors.helpModal};
  box-shadow: 0 5px 5px -3px rgba(56, 56, 56, 0.2),
    0 8px 10px 1px rgba(70, 70, 70, 0.14), 0 3px 14px 2px rgba(71, 71, 71, 0.12);
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.helpModalText};
`;

const HelpBox = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <Box position="relative">
      <HelpIcon
        role="button"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        ?
      </HelpIcon>
      {isShown && <HelpModal>{HELP_MESSAGE}</HelpModal>}
    </Box>
  );
};

export default HelpBox;
