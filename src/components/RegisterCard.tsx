import CardLoadingIcon from "./CardLoadingIcon";
import styled from "styled-components";

import { useEffect } from "react";

interface RegisterCardProps {
  setIsLoading: (isLoading: boolean) => void;
}

const RegisterCard = ({ setIsLoading }: RegisterCardProps) => {
  const fetchData = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CardLoadingIcon />
      <GuideText>카드를 등록중입니다.</GuideText>
    </>
  );
};

const GuideText = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #575757;
  margin-top: 380px;
`;

export default RegisterCard;
