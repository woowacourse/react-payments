import { n as RadiusButton, r as CARD_BRAND } from "./Button-DkZKU2Wb.js";
import { UNSAFE_withComponentProps, useLocation } from "react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import styled from "@emotion/styled";
//#region src/app/assets/check.svg
var check_default = "data:image/svg+xml,%3csvg%20width='76'%20height='76'%20viewBox='0%200%2076%2076'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='38'%20cy='38'%20r='38'%20fill='%23333333'/%3e%3cpath%20d='M23%2034.0377L35.0471%2048L55%2028'%20stroke='white'%20stroke-width='7.49999'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
//#endregion
//#region src/features/card/components/CardCreateComplete.tsx
function CardCreateComplete() {
	const { firstDigitsCardNumber, cardBrand } = useLocation().state ?? {};
	return /* @__PURE__ */ jsx(RootContainer, { children: /* @__PURE__ */ jsxs(CardCreateCompleteContent, { children: [
		/* @__PURE__ */ jsx(CreateCompleteSVG, {
			src: check_default,
			alt: "card-create-complete"
		}),
		/* @__PURE__ */ jsxs("p", { children: [
			firstDigitsCardNumber,
			"로 시작하는 ",
			CARD_BRAND[cardBrand].title,
			"카드 가 등록되었어요."
		] }),
		/* @__PURE__ */ jsx(RadiusButton, {
			type: "button",
			children: "확인"
		})
	] }) });
}
var RootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 0 19px;
`;
var CreateCompleteSVG = styled.img`
  height: 76px;
  width: 76px;
`;
var CardCreateCompleteContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  p {
    font-size: 25px;
    color: #353c49;
    font-weight: 700;
  }
`;
//#endregion
//#region src/pages/card/CreateComplete.tsx
var CreateComplete_default = UNSAFE_withComponentProps(function CardCreateCompletePage() {
	return /* @__PURE__ */ jsx(CardCreateComplete, {});
});
//#endregion
export { CreateComplete_default as default };
