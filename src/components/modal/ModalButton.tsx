import { HyundaiLogo, BCLogo, ShinhanLogo, KakaoLogo, HanaLogo, WorriLogo, KBLogo, LotteLogo } from "../BrandIcon";
import { useContext } from "react";

import styled from "styled-components";
import { NewCardContext } from "../../contexts/NewCardContext";

import { BrandType } from "../../types/card";

interface ModalButtonProps {
  brand: BrandType;
  closeModal: () => void;
}

const selectLogo = (brand: BrandType): JSX.Element => {
  if (brand === "현대카드") return <HyundaiLogo />;
  if (brand === "BC카드") return <BCLogo />;
  if (brand === "신한카드") return <ShinhanLogo />;
  if (brand === "카카오뱅크") return <KakaoLogo />;
  if (brand === "하나카드") return <HanaLogo />;
  if (brand === "우리카드") return <WorriLogo />;
  if (brand === "KB카드") return <KBLogo />;
  if (brand === "롯데카드") return <LotteLogo />;

  return <>No Logo</>;
};

export const ModalButton = ({ brand, closeModal }: ModalButtonProps) => {
  const { setBrand } = useContext(NewCardContext);

  const handleClick = (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    event.preventDefault();

    setBrand(brand);
    closeModal();
  };

  return (
    <Button onClick={handleClick}>
      {selectLogo(brand)}
      <BrandName>{brand}</BrandName>
    </Button>
  );
};

const BrandName = styled.div`
  font-size: 12px;
  color: #525252;
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 67px;
  height: 64px;
`;
