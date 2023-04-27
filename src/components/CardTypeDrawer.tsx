import styled from "styled-components";
import { CardCompanyData } from "../constant";
import CardLogo from "./CardLogo";
import Drawer from "./common/Drawer";

interface CardTypeDrawerProps {
  cardCompanys: CardCompanyData[];
}

const Wrapper = styled.div`
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  column-gap: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: calc(757px / 3);
  justify-content: center;
  padding: 30px;
  /* position: absolute; */
  top: calc(757px / 3 * 2);
  width: 400px;
`;
const COMPANY_LIST = [
  "BC",
  "HYUNDAI",
  "HANA",
  "KAKAO",
  "KOOKMIN",
  "LOTTE",
  "SINHAN",
  "WOORI",
];
export default function CardTypeDrawer() {
  return (
    <Drawer isOpenDrawer>
      <Wrapper>
        {COMPANY_LIST.map((company) => (
          <CardLogo onClick={() => {}} cardName={company} />
        ))}
      </Wrapper>
    </Drawer>
  );
}
