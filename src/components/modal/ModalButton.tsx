import { HyundaiLogo, BCLogo, ShinhanLogo, KakaoLogo, HanaLogo, WorriLogo, KBLogo, LotteLogo } from "../BrandIcon";

import styled from "styled-components";

import { useContext } from "react";
import { NewCardContext } from "../../contexts/NewCardContext";

import { BrandType } from "../../types/card";
import { DEFAULT_BRAND } from "../../constants";

interface ModalButtonProps {
  brand: BrandType;
  closeModal: () => void;
}

const selectLogo: Record<BrandType | typeof DEFAULT_BRAND, JSX.Element> = {
  현대카드: <HyundaiLogo />,
  BC카드: <BCLogo />,
  신한카드: <ShinhanLogo />,
  카카오뱅크: <KakaoLogo />,
  하나카드: <HanaLogo />,
  우리카드: <WorriLogo />,
  KB카드: <KBLogo />,
  롯데카드: <LotteLogo />,
  [DEFAULT_BRAND]: <>No Logo</>,
};

const ModalButton = ({ brand, closeModal }: ModalButtonProps) => {
  const { setBrand } = useContext(NewCardContext);

  const handleClick = (event: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) => {
    event.preventDefault();

    setBrand(brand);
    closeModal();
  };

  return (
    <Button onClick={handleClick}>
      {selectLogo[brand]}
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

export default ModalButton;
