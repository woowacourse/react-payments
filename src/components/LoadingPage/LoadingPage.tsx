import React, { useEffect, useRef } from "react";
import St from "./LoadingPageStyled";
import { useNavigate } from "react-router";

function LoadingPage() {
  const navigate = useNavigate();

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const finish = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    timer.current = setTimeout(finish, 3000);

    return () => {
      clearTimeout(timer.current as NodeJS.Timeout);
    };
  });

  return (
    <St.Page>
      <St.Loader />
      <St.Title>카드를 등록중입니다.</St.Title>
    </St.Page>
  );
}

export default LoadingPage;
