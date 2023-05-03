import styled from "styled-components";
import { Spinner } from "../components/common/Spinner";
import { useNavigate } from "react-router-dom";
import { PAGE } from "../constant/routePath";
import { useEffect } from "react";

export const Loading = () => {
  const moveTo = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      moveTo(PAGE.registerCard);
    }, 1500);
  }, []);

  return (
    <Wrapper>
      <Spinner />
      <GuideText>카드를 등록중입니다.</GuideText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(120%);
`;

const GuideText = styled.h1`
  font-size: 20px;
  font-weight: 800;
  margin-top: 90px;
`;
