/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Visa from "../../../public/Visa.png";
import MasterCard from "../../../public/MasterCard.png";

const seperateCard = { visa: Visa, masterCard: MasterCard };

// information = {
//   uniqueNumber: ["", "", "", ""],
//   expirationDate: ["", ""],
//   cvcNumber: [""],
// };
const PreviewCard = () => {
  return (
    <div css={previewCardStyle}>
      <div css={TopStyle}>
        <div css={magneticStyle}></div>
        <img css={cardImageStyle} src={seperateCard["visa"]} alt="visa" />
      </div>
      <div css={cardInformationStyle}>
        <div css={uniqueNumberStyle}>
          <span>1234</span>
          <span>1234</span>
          <span>1234</span>
          <span>1234</span>
        </div>
        <span css={expirationDateStyle}>09 / 25</span>
      </div>
    </div>
  );
};

export default PreviewCard;

const previewCardStyle = css`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: #333;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const TopStyle = css`
  display: flex;
  justify-content: space-between;
`;

const magneticStyle = css`
  width: 36px;
  height: 22px;
  background-color: #ddcd78;
  stroke-width: 0.5px;
  stroke: rgba(221, 205, 120, 0.1);
  border-radius: 4px;
`;

const cardImageStyle = css`
  width: 36px;
  height: 22px;
`;

const cardInformationStyle = css`
  display: flex;
  flex-direction: column;
  padding-left: 7px;
  gap: 8px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: 2.24px;
`;

const uniqueNumberStyle = css`
  display: flex;
  gap: 10px;
`;

const expirationDateStyle = css``;
