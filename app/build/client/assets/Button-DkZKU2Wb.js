import styled from "@emotion/styled";
//#region src/features/card/Constants.ts
var CARD_INPUT = {
	EACH_NUMBER_LENGTH: 4,
	EACH_EXPIRY_DATE_LENGTH: 2,
	CVC_LENGTH: 3,
	PASSWORD_LENGTH: 2
};
var CARD_BRAND = {
	bc: { title: "BC" },
	sinhan: { title: "신한" },
	kakao: { title: "카카오뱅크" },
	hyundai: { title: "현대" },
	woori: { title: "우리" },
	lotte: { title: "롯데" },
	hana: { title: "하나" },
	kookmin: { title: "국민" }
};
//#endregion
//#region src/features/card/style/Button.ts
var Button = styled.button`
  width: 100%;
  background-color: #333333;
  padding: 20px 0;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  &:disabled {
    background-color: #3333334d;
    cursor: auto;
  }
`;
var RadiusButton = styled(Button)`
  border-radius: 5px;
`;
//#endregion
export { CARD_INPUT as i, RadiusButton as n, CARD_BRAND as r, Button as t };
