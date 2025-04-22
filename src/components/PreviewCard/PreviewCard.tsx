import { css } from "@emotion/react";

const seperateCard = {
  visa: "Visa.png",
  master: "Mastercard.png",
};

const PreviewCard = ({ uniqueNumber, expirationDate }: { uniqueNumber: string[]; expirationDate: string[] }) => {
  function getCardType(cardNumber: string) {
    const bin = cardNumber.slice(0, 2);
    if (cardNumber.startsWith("4")) return "visa";
    if (/^5[1-5]/.test(bin)) return "master";
    return "none";
  }
  //utils로 분리

  const cardType = getCardType(uniqueNumber[0]);

  return (
    <div css={previewCardStyle}>
      <div css={TopStyle}>
        <div css={magneticStyle}></div>
        {cardType !== "none" && <img css={cardImageStyle} src={seperateCard[cardType]} alt={cardType} />}
      </div>
      <div css={cardInformationStyle}>
        <div css={uniqueNumberStyle}>
          {uniqueNumber.map((number: string, index) => {
            return (
              <span key={index} css={numberStyle}>
                {index === 2 || index === 3
                  ? Array(number.length)
                      .fill("*")
                      .map((dot, idx) => <span key={idx}>{dot}</span>)
                  : number}
              </span>
            );
          })}
        </div>
        <span css={expirationDateStyle}>
          <span css={dateStyle}>{expirationDate[0]}</span>
          {expirationDate[0].length === 2 ? " / " : ""}
          <span css={dateStyle}>{expirationDate[1]}</span>
        </span>
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
  height: 20px;
`;

const numberStyle = css`
  width: 38px;
`;

const dateStyle = css`
  display: inline-block;
  width: 22px;
`;

const expirationDateStyle = css``;
