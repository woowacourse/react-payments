import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main
      css={css`
        display: flex;
        min-height: 100vh;
        width: 100vw;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          width: 376px;
          max-width: 100vw;
          min-height: 0;
          height: min(700px, 100vh);
          background-color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow-y: auto;
        `}
      >
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
