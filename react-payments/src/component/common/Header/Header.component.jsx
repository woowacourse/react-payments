import { memo } from "react";
import Box from "styles/box";

const Header = memo(({ children }) => {
  return (
    <Box display="flex" gap="25px" alignItems="center">
      {children}
    </Box>
  );
});

export default Header;
