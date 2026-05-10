import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main
      css={css`
        display: flex;
        min-height: 100vh;
        width: 100vw;
        align-items: flex-start;
        justify-content: center;
        padding-top: 60px;
        background-color: #f5f5f5;
      `}
    >
      <div
        css={css`
          width: 376px;
          padding: 77px 30px 20px;
          background-color: #ffffff;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 45px;
        `}
      >
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
