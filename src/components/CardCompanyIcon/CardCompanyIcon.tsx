import styled from "styled-components";
import { ReactComponent as BCLogo } from "../../assets/bccard-logo.svg";
import { ReactComponent as HanaLogo } from "../../assets/hanacard-logo.svg";
import { ReactComponent as HyundaiLogo } from "../../assets/hyundaicard-logo.svg";
import { ReactComponent as KakaoBankLogo } from "../../assets/kakaobank-logo.svg";
import { ReactComponent as KBLogo } from "../../assets/kbcard-logo.svg";
import { ReactComponent as LotteLogo } from "../../assets/lottecard-logo.svg";
import { ReactComponent as ShinhanLogo } from "../../assets/shinhancard-logo.svg";
import { ReactComponent as WooriLogo } from "../../assets/wooricard-logo.svg";

export const CARD_LOGO = {
  비씨카드: <BCLogo width={"37px"} height={"37px"} />,
  하나카드: <HanaLogo width={"37px"} height={"37px"} />,
  현대카드: <HyundaiLogo width={"37px"} height={"37px"} />,
  카카오뱅크: <KakaoBankLogo width={"37px"} height={"37px"} />,
  국민카드: <KBLogo width={"37px"} height={"37px"} />,
  롯데카드: <LotteLogo width={"37px"} height={"37px"} />,
  신한카드: <ShinhanLogo width={"37px"} height={"37px"} />,
  우리카드: <WooriLogo width={"37px"} height={"37px"} />,
};

type CardCompanyIconProps = {
  company: keyof typeof CARD_LOGO;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const CardCompanyIcon = ({ company, onClickHandler }: CardCompanyIconProps) => {
  return (
    <Wrapper name={company} onClick={onClickHandler}>
      {company && CARD_LOGO[company]}
      <span>{company}</span>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  border: none;
  background-color: transparent;

  cursor: pointer;
`;

export default CardCompanyIcon;
