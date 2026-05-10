import { i as CARD_INPUT, t as Button } from "./Button-DkZKU2Wb.js";
import { UNSAFE_withComponentProps, useNavigate } from "react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useRef, useState } from "react";
import styled from "@emotion/styled";
//#region src/features/card/assets/Mastercard.svg
var Mastercard_default = "data:image/svg+xml,%3csvg%20width='54'%20height='33'%20viewBox='0%200%2054%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M37.1758%200C46.1128%200.000209594%2053.3574%207.3293%2053.3574%2016.3701C53.3574%2025.4109%2046.1128%2032.74%2037.1758%2032.7402C33.1701%2032.7402%2029.5046%2031.267%2026.6787%2028.8281C23.853%2031.2669%2020.1881%2032.7401%2016.1826%2032.7402C7.24542%2032.7402%201.52857e-05%2025.4111%200%2016.3701C0%207.32917%207.24542%200%2016.1826%200C20.1879%209.34663e-05%2023.853%201.47259%2026.6787%203.91113C29.5045%201.47245%2033.1703%200%2037.1758%200Z'%20fill='%23ED0006'/%3e%3cpath%20d='M37.1748%200C46.112%200%2053.3574%207.32917%2053.3574%2016.3701C53.3574%2025.4111%2046.112%2032.7402%2037.1748%2032.7402C33.1693%2032.7401%2029.5044%2031.2669%2026.6787%2028.8281C30.1577%2025.8256%2032.3642%2021.3589%2032.3643%2016.3701C32.3643%2011.3811%2030.1579%206.91371%2026.6787%203.91113C29.5044%201.47258%2033.1695%200.000118709%2037.1748%200Z'%20fill='%23F9A000'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M26.679%203.91068C30.1583%206.91325%2032.3646%2011.381%2032.3646%2016.3701C32.3646%2021.3592%2030.1583%2025.827%2026.679%2028.8295C23.1996%2025.827%2020.9934%2021.3592%2020.9934%2016.3701C20.9934%2011.381%2023.1996%206.91325%2026.679%203.91068Z'%20fill='%23FF5E00'/%3e%3c/svg%3e";
//#endregion
//#region src/features/card/assets/visa-logo.svg
var visa_logo_default = "data:image/svg+xml,%3csvg%20width='59'%20height='19'%20viewBox='0%200%2059%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.5257%2018.3983H9.49751L5.72694%204.01338C5.54798%203.35167%205.16798%202.76669%204.60901%202.49097C3.21405%201.7981%201.6769%201.24668%200%200.968571V0.414752H8.1001C9.21803%200.414752%2010.0565%201.24668%2010.1962%202.21287L12.1526%2012.5892L17.1784%200.414752H22.0669L14.5257%2018.3983ZM24.8617%2018.3983H20.1129L24.0233%200.414752H28.772L24.8617%2018.3983ZM34.9157%205.39674C35.0555%204.42816%2035.8939%203.87434%2036.8721%203.87434C38.4093%203.73528%2040.0837%204.01339%2041.4811%204.70387L42.3196%200.831928C40.9222%200.278108%2039.385%200%2037.99%200C33.381%200%2030.0272%202.49099%2030.0272%205.94816C30.0272%208.57821%2032.4028%209.95916%2034.0797%2010.7911C35.8939%2011.6206%2036.5926%2012.1744%2036.4529%2013.004C36.4529%2014.2483%2035.0555%2014.8021%2033.6605%2014.8021C31.9836%2014.8021%2030.3067%2014.3873%2028.772%2013.6944L27.9336%2017.5688C29.6105%2018.2593%2031.4246%2018.5374%2033.1015%2018.5374C38.2695%2018.674%2041.4811%2016.1854%2041.4811%2012.4501C41.4811%207.74628%2034.9157%207.47057%2034.9157%205.39674ZM58.1005%2018.3983L54.33%200.414752H50.2799C49.4415%200.414752%2048.603%200.968571%2048.3236%201.7981L41.3414%2018.3983H46.2299L47.2056%2015.7707H53.212L53.771%2018.3983H58.1005ZM50.9786%205.2577L52.3736%2012.0354H48.4633L50.9786%205.2577Z'%20fill='%23172B85'/%3e%3c/svg%3e";
//#endregion
//#region src/features/card/assets/unionpay-logo.svg
var unionpay_logo_default = "/react-payments/assets/unionpay-logo-BQm0j4oD.svg";
//#endregion
//#region src/features/card/assets/amex-logo.svg
var amex_logo_default = "data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M35.9667%2035.9667H0V5.72205e-05H35.9667V17.9816V35.9667Z'%20fill='white'/%3e%3cpath%20d='M18.0502%2013.0294H15.318L16.6841%209.73655L18.0502%2013.0294ZM19.8475%2017.3001H22.939L18.4961%207.23464H14.9586L10.5154%2017.3001H13.535L14.3691%2015.287H18.999L19.8475%2017.3001ZM33.2488%2017.3001H35.9667V7.23464H31.7391L29.4814%2013.5038L27.2383%207.23464H22.939V17.3001H25.6566V10.2543L28.2449%2017.3001H30.6605L33.2488%2010.2397V17.3001ZM17.1164%2026.4969V24.9294H22.796V22.6575H17.1164V21.0902H22.9398V18.7608H14.3699V28.8262H22.9398V26.4969H17.1164ZM33.2025%2023.769L35.9667%2026.7095V20.8529L33.2025%2023.769ZM32.3584%2028.8262H35.9667L31.1936%2023.7648L35.9667%2018.7608H32.4158L29.4683%2021.9818L26.5491%2018.7608H22.9399L27.6851%2023.7935L22.9399%2028.8262H26.4486L29.4106%2025.5765L32.3584%2028.8262ZM35.9667%2035.9667V30.2676H31.6276L29.3936%2027.7974L27.1483%2030.2676H12.842V18.7549H8.22454L13.952%205.79315H19.4756L21.4473%2010.2336V5.79315H28.2845L29.4718%209.13934L30.6666%205.79315H35.9667V5.72205e-05H0V35.9667H35.9667Z'%20fill='%231977C6'/%3e%3c/svg%3e";
//#endregion
//#region src/features/card/assets/diners-club-logo.png
var diners_club_logo_default = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAlCAYAAADfosCNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABQxJREFUeAHNWE1MXFUY/e4dZojyE2K1VVn42gScppJgTbDdWCqzMIoydGdNWzClRlssJC6KG0pirbtSaVJDFxSN7Y6fCLVRTCEurCQihhom04S+JlaiaZsJ0MTOMHO959HBgd7vdWYYEs9iMu/d+94799zv9wrKEP7ac9VxRXVSKUtfVipBFjtZUISUsIVSNgk1JoScDA01jVKGEOlMsoI9Jb7o4lGSqoUUleBe6aYiqqp4mooL8qmowOfMu/X3PN36a4FCM3dp7t597nW2UtTh8XlHQwONNqUBkQm5qopnKLDDovpAmUPODeNTs9Q3Eqb+H8LcFFurfD58qamDsiXpD561VMxzRWmuW7dsoI+bdhJIZgqo2/X1hCtZ6fXudlPVSHLb692VMUlXoN6BuhccgmsFlD3WOabNYd40HKGEbAx/e3CA0iGZJFj8eH7JydZXnO3NFaDqvrZhjqiGbAgPH+wlN5KpWzzw+R7CNucac/eiFPywjyXqVfTi75cOTabek6kXSYLY3vUgCBTrSPDVyTec6GBCTFC/P9hjkYnk87XdR0GwPlBOsEMOUKLrwi/kht7Ba3prF9jx0o1F9FnLLm5Y7+ZiD60miW3WTtKC1TXv3c49rI3/T2erzlyYIDeMXLXp1Xcvui4GkaK+ptw4pkhVI2msIElRTzVUbH57u7NKExDz3I3+YWAxx06NsePN7/CC6IDfvoKkTm3tULFmp2V8YFpnkLZO/mNuQHz89NxPxjEIko6asizYXQkVIX/xg/S2GodPfEdrAWwUpmLCnkA5+1w8oYIOSRlT1c7kmjLjRGxzJlvMoYuxYzdxhKA6h6QSwnEz/5YnjRPPXHR3knSBjMOp6ZJuLdQP2iaFk5tNq5meuZMTFZP4WRM1gYuZQEE0ZmmSyipi5HaLddkgpBdtgn8znziiHqqUKCI4m5ieuU25RDaLlglV4oSgokIf/V+hw6MmqUt8VNMmcIE9W3Bm5Qbt2LYUSpNktiHXRQb3PpRwHDy6R9IhiCbhwSgcTC8tLsidKQR2PGe8zzkU4EmoCLz7t6WJZifZX1dBucBS4/ascWz6xl3uMRu1pZQkR3E1cvWmcRbKtlyoieLFSNA1Fi9xk04frJ2nf8TcKIHgkb0v0Vqw1GGaczTyOgftME4r8aDoVadhk30MUajZnCVR2DV6JRPgsOPXZrlH7eRBgkMymufrhJpuefqILoYzJYqc/KVuFbge3a14wQFC8r8HP5HQ4D8bymsfm1+IVuP6ZcbA8VGUVnMLUQowtScAhaD+Rw1VlO/LY+cc/sRcAurqZyA8fKht+Tr5B9VGfiz2K2rLQd0p+tepEQMe0THaMq4PCy7/d1iw3IjZA40REY/vxrZ/cOL7nBcXqWg7NcZ7dEK2phJcQRIIXX7flglqxQv2tQ2tC1H0PGjUTBCkWk2nGJ7VN25f/2byqbI3b+otCSJ2It/mIj1iwfv1wn+c+MM4riQ1hofe+4KM5BnguGVRN+rJXhyeXbqxkLIBYiE6R+Y40NanFvWrTy3SIgn4XztrJTzyuJ52ANcg2/DWNrbVSAWco3dwSneL193CzOmYz3sc/uD2rrQOUdFaakXblVpq2pCHt25+wsnFyEilmwopWe5N37jjpLrxqVn+ozrE5CWow029jEkuk4WyebJBkNyVJJwWdMQQJCZJJQbve33nH6Xcw4+vAbDbuBQl3DjKrLjPG0n32JnDv+PbOwJO/ucsAAAAAElFTkSuQmCC";
//#endregion
//#region src/features/card/Utils.ts
function sanitizeErrors(messages) {
	return [...new Set(messages.filter((item) => item !== ""))];
}
function fillEmptyPlaceToBlank(value, length) {
	let newValue = value;
	const emptyLength = length - value.length;
	if (emptyLength) newValue += " ".repeat(emptyLength);
	return newValue;
}
function joinCardNumber(stringValues, eachLength) {
	return stringValues.map((eachString) => {
		return fillEmptyPlaceToBlank(eachString, eachLength);
	}).join("");
}
var runValidation = (validators) => {
	try {
		validators.forEach((validate) => {
			validate();
		});
		return {
			state: false,
			message: ""
		};
	} catch (err) {
		return {
			state: true,
			message: err.message
		};
	}
};
//#endregion
//#region src/features/card/CardNetwork.ts
var ALL_CARD_NETWORK_BRAND = [
	{
		title: "visa",
		length: 16,
		check(value) {
			if (value.startsWith("4")) return this.title;
		}
	},
	{
		title: "master",
		length: 16,
		check(value) {
			if (value.startsWith("5") && [
				"1",
				"2",
				"3",
				"4",
				"5"
			].includes(value[1])) return this.title;
		}
	},
	{
		title: "union",
		length: 16,
		check(value) {
			if (value.startsWith("62")) {
				if ([
					"624",
					"625",
					"626"
				].includes(value.slice(0, 3))) return this.title;
				if (6282 <= Number(value.slice(0, 4)) && Number(value.slice(0, 4)) <= 6288) return this.title;
				if (622126 <= Number(value.slice(0, 6)) && Number(value.slice(0, 6)) <= 622925) return this.title;
			}
		}
	},
	{
		title: "amex",
		length: 15,
		check(value) {
			const validValueLength = value.replaceAll(" ", "").length;
			if ((value.startsWith("34") || value.startsWith("37")) && validValueLength >= 2 && validValueLength <= 15) return this.title;
		}
	},
	{
		title: "diners",
		length: 14,
		check(value) {
			const validValueLength = value.replaceAll(" ", "").length;
			if (value.startsWith("36") && validValueLength <= 14) return this.title;
		}
	}
];
function detectCardNetwork(cardNumber) {
	for (const networkBrand of ALL_CARD_NETWORK_BRAND) if (networkBrand.check(cardNumber) !== void 0) return networkBrand;
}
//#endregion
//#region src/features/card/components/preview/CardNetworkBrand.tsx
function CardNetworkBrand({ cardNumber }) {
	const networkBrandName = detectCardNetwork(joinCardNumber(Object.values(cardNumber), CARD_INPUT.EACH_NUMBER_LENGTH))?.title;
	const selectBrandImage = (brand) => {
		if (brand === "visa") return visa_logo_default;
		if (brand === "master") return Mastercard_default;
		if (brand === "union") return unionpay_logo_default;
		if (brand === "amex") return amex_logo_default;
		if (brand === "diners") return diners_club_logo_default;
	};
	return networkBrandName && /* @__PURE__ */ jsx(CardNetworkBrandContainer, { children: /* @__PURE__ */ jsx("img", {
		src: selectBrandImage(networkBrandName),
		alt: `${networkBrandName}-network-brand-logo`
	}) });
}
var CardNetworkBrandContainer = styled.div`
  height: 22px;
  width: 36px;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 21.75px;
    height: 13.31px;
  }
`;
//#endregion
//#region src/features/card/components/preview/CardNumber.tsx
function CardNumber({ cardNumber }) {
	return /* @__PURE__ */ jsxs(CardNumberContainer, {
		id: "preview-card-number",
		children: [
			/* @__PURE__ */ jsx("span", { children: cardNumber.firstDigits }),
			/* @__PURE__ */ jsx("span", { children: cardNumber.secondDigits }),
			/* @__PURE__ */ jsx("span", {
				className: "secret",
				children: "●".repeat(cardNumber.thirdDigits.length)
			}),
			/* @__PURE__ */ jsx("span", {
				className: "secret",
				children: "●".repeat(cardNumber.fourthDigits.length)
			})
		]
	});
}
var CardNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;
  width: 100%;
  height: 1.25rem;
  span {
    flex: 4 1;
    letter-spacing: 2px;
  }
  .secret {
    font-size: 6px;
  }
`;
//#endregion
//#region src/features/card/components/preview/CardExpiryDate.tsx
function CardExpiryDate({ cardExpiryDate }) {
	return /* @__PURE__ */ jsxs(CardExpiryDateContainer, { children: [
		/* @__PURE__ */ jsx("span", {
			id: "preview-card-expiry-date-month",
			children: cardExpiryDate.expiryMonth
		}),
		cardExpiryDate.expiryMonth.length === 2 && /* @__PURE__ */ jsx("span", {
			id: "preview-card-expiry-date-divide-line",
			children: " / "
		}),
		/* @__PURE__ */ jsx("span", {
			id: "preview-card-expiry-date-year",
			children: cardExpiryDate.expiryYear
		})
	] });
}
var CardExpiryDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.3rem;
  width: 100%;
  height: 1.25rem;
`;
//#endregion
//#region src/features/card/components/preview/CardPreview.tsx
function CardPreview({ cardNumber, cardExpiryDate, cardBrand }) {
	const getCardBgHex = (cardBrand) => {
		if (cardBrand === "bc") return "#F04651";
		if (cardBrand === "sinhan") return "#0046FF";
		if (cardBrand === "kakao") return "#FFE600";
		if (cardBrand === "hyundai") return "#000000";
		if (cardBrand === "woori") return "#007BC8";
		if (cardBrand === "lotte") return "#ED1C24";
		if (cardBrand === "hana") return "#009490";
		if (cardBrand === "kookmin") return "#6A6056";
		return "#333333";
	};
	return /* @__PURE__ */ jsxs(CardContainer$1, {
		cardBg: getCardBgHex(cardBrand ?? ""),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "card-meta",
			children: [/* @__PURE__ */ jsx("div", { className: "ic-chip" }), /* @__PURE__ */ jsx(CardNetworkBrand, { cardNumber })]
		}), /* @__PURE__ */ jsxs("div", {
			className: "card-contents",
			children: [/* @__PURE__ */ jsx(CardNumber, { cardNumber }), /* @__PURE__ */ jsx(CardExpiryDate, { cardExpiryDate })]
		})]
	});
}
var CardContainer$1 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: ${(props) => props.cardBg};
  transition: background-color 200ms ease-out;
  padding: 0.5rem 0.75rem;
  margin: 4.625rem auto 2.75rem auto;
  color: white;
  box-shadow: 3px 3px 5px 0px #00000040;

  .ic-chip {
    height: 22px;
    width: 36px;
    border-radius: 4px;
    background-color: #ddcd78;
  }

  .card-meta {
    display: flex;
    position: absolute;
    box-sizing: border-box;
    justify-content: space-between;
    width: 100%;
    top: 0;
    padding: 8px 12px;
  }

  .card-contents {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 200px;
  }
`;
//#endregion
//#region src/features/card/components/form/CardSection.tsx
function CardSection({ title, subTitle, display, children }) {
	return /* @__PURE__ */ jsxs(CardSectionContainer, {
		isDisplay: display,
		children: [
			/* @__PURE__ */ jsx("h2", { children: title }),
			/* @__PURE__ */ jsx("p", {
				className: "sub-title",
				children: subTitle
			}),
			children
		]
	});
}
var CardSectionContainer = styled.div`
  display: ${(props) => props.isDisplay ? "block" : "none"};
  h2 {
    margin-bottom: 0.25rem;
  }

  .sub-title {
    font-size: 9.5px;
    color: #6c727a;
    margin-bottom: 1rem;
    min-height: 1px;
  }
`;
//#endregion
//#region src/features/card/components/form/CardInput.tsx
var CardInput = forwardRef((props, ref) => {
	return /* @__PURE__ */ jsx(StyledCardInput, {
		ref,
		...props,
		inputMode: "numeric"
	});
});
var StyledCardInput = styled.input`
  border: solid 1px ${(props) => props.isError ? "#FF3D3D" : "#acacac"};
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 11px;
  height: 32px;
  width: 100%;
  box-sizing: border-box;
  -moz-appearance: textfield;
  &::placeholder {
    color: #acacac;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
//#endregion
//#region src/features/card/components/form/ErrorMessage.tsx
function ErrorMessage({ messages }) {
	return messages && /* @__PURE__ */ jsx(ErrorMessageList, { children: messages.map((message, index) => /* @__PURE__ */ jsx(ErrorMessageItem, { children: message }, index)) });
}
var ErrorMessageList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  margin-top: 0.4rem;
`;
var ErrorMessageItem = styled.li`
  color: #e22222;
  font-size: 9.5px;
  height: 1rem;
`;
//#endregion
//#region src/features/card/components/form/NetworkBrandErrorMessage.tsx
function NetworkBrandErrorMessage({ message }) {
	const [isOpen, setIsOpen] = useState(false);
	if (!message) return null;
	return /* @__PURE__ */ jsxs(Container, { children: [/* @__PURE__ */ jsxs(Header, {
		type: "button",
		onClick: () => setIsOpen((prev) => !prev),
		children: [/* @__PURE__ */ jsxs(LeftSection, { children: [/* @__PURE__ */ jsx(WarningBadge, { children: "!" }), /* @__PURE__ */ jsx(MessageText, { children: message })] }), /* @__PURE__ */ jsx(Chevron, {
			isOpen,
			children: /* @__PURE__ */ jsx("svg", {
				width: "10",
				height: "10",
				viewBox: "0 0 10 10",
				fill: "none",
				children: /* @__PURE__ */ jsx("path", {
					d: "M2 3.5L5 6.5L8 3.5",
					stroke: "currentColor",
					strokeWidth: "1.5",
					strokeLinecap: "round",
					strokeLinejoin: "round"
				})
			})
		})]
	}), /* @__PURE__ */ jsx(ContentWrapper, {
		isOpen,
		children: /* @__PURE__ */ jsxs(BrandInfoList, { children: [
			/* @__PURE__ */ jsx("li", { children: "Visa: 4로 시작하는 16자리" }),
			/* @__PURE__ */ jsx("li", { children: "MasterCard: 51~55로 시작하는 16자리" }),
			/* @__PURE__ */ jsxs("li", { children: ["UnionPay: 아래 범위로 시작하는 16자리", /* @__PURE__ */ jsxs(BrandInfoSubList, { children: [
				/* @__PURE__ */ jsx("li", { children: "622126~622925" }),
				/* @__PURE__ */ jsx("li", { children: "624~626" }),
				/* @__PURE__ */ jsx("li", { children: "6282~6288" })
			] })] }),
			/* @__PURE__ */ jsx("li", { children: "Amex: 34 또는 37로 시작하는 15자리" }),
			/* @__PURE__ */ jsx("li", { children: "Diners: 300~305, 36, 38로 시작하는 14자리" })
		] })
	})] });
}
var Container = styled.div`
  margin-top: 0.4rem;
  border: 1px solid #fca5a5;
  border-radius: 6px;
  background-color: #fff5f5;
  overflow: hidden;
`;
var Header = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 8px;
  background: none;
  border: none;
  cursor: pointer;
  gap: 6px;
`;
var LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
var WarningBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: #c13740;
  color: #fff;
  font-size: 8px;
  font-weight: 700;
  flex-shrink: 0;
  line-height: 1;
`;
var MessageText = styled.span`
  color: #c13740;
  font-size: 10px;
  text-align: left;
`;
var Chevron = styled.span`
  display: flex;
  align-items: center;
  color: #c13740;
  flex-shrink: 0;
  transform: rotate(${({ isOpen }) => isOpen ? "180deg" : "0deg"});
  transition: transform 0.2s ease;
`;
var ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: ${({ isOpen }) => isOpen ? "1fr" : "0fr"};
  transition: grid-template-rows 0.25s ease;
`;
var BrandInfoList = styled.ul`
  list-style: none;
  padding: 0 8px;
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 3px;

  &:not(:empty) {
    padding-bottom: 8px;
  }

  > li {
    color: #4a4a4a;
    font-size: 9px;
    padding-left: 8px;
    position: relative;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      font-size: 7px;
      top: 1px;
    }
  }
`;
var BrandInfoSubList = styled.ul`
  list-style: none;
  padding: 2px 0 0 8px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;

  > li {
    color: #7a7a7a;
    font-size: 8.5px;
    padding-left: 8px;
    position: relative;

    &::before {
      content: "-";
      position: absolute;
      left: 0;
      color: #bbb;
    }
  }
`;
//#endregion
//#region src/features/card/hooks/useFocusChain.ts
function useFocusChain(length, maxLength) {
	const refs = useRef(Array(length).fill(null));
	const ref = (index, node) => {
		refs.current[index] = node;
	};
	const changeFocus = (e, index) => {
		if (e.target.value.length === maxLength) {
			refs.current[index + 1]?.focus();
			return;
		}
		if (e.target.value.length === 0) {
			refs.current[index - 1]?.focus();
			return;
		}
	};
	return {
		ref,
		changeFocus
	};
}
//#endregion
//#region src/features/card/validators/CardValidator.ts
var Validator = {
	isNumber(value) {
		if (Number.isNaN(Number(value))) throw new Error("숫자만 입력 가능합니다.");
	},
	isValidNetworkBrand(value) {
		const networkBrand = detectCardNetwork(value);
		if (value.trim() !== "" && networkBrand === void 0) throw new Error("존재하지 않는 네트워크 브랜드 입니다.");
	},
	isValidCardNumberLength(value) {
		if (![0, CARD_INPUT.EACH_NUMBER_LENGTH].includes(value.length)) throw new Error("카드 번호 각 항목은 4자리여야 합니다.");
	},
	isValidMonth(value) {
		if (value.length === 1 && !["0", "1"].includes(value[0])) throw new Error("유효하지 않은 날짜 형식입니다. 0 이나 1로 시작해야 합니다.");
		if (value.length === 2) {
			const month = Number(value);
			if (month < 1 || month > 12) throw new Error("유효하지 않은 날짜 형식입니다. 1 ~ 12 이내 숫자여야 합니다.");
		}
	},
	isValidYear(value) {
		if (value.length !== 2) return;
		const currentTwoDigit = (/* @__PURE__ */ new Date()).getFullYear() % 100;
		let offset = Number(value) - currentTwoDigit;
		if (offset < 0) offset += 100;
		if (offset > 5) throw new Error("유효하지 않은 연도입니다.");
	},
	isValidCardExpiryDateLength(value) {
		if (![0, CARD_INPUT.EACH_EXPIRY_DATE_LENGTH].includes(value.length)) throw new Error("날짜 각 항목은 2자리여야 합니다.");
	},
	isValidCardCVCLength(value) {
		if (![0, CARD_INPUT.CVC_LENGTH].includes(value.length)) throw new Error("CVC는 3자리여야 합니다.");
	},
	isValidCardPassswordLength(value) {
		if (![0, CARD_INPUT.PASSWORD_LENGTH].includes(value.length)) throw new Error("Password는 2자리여야 합니다.");
	}
};
//#endregion
//#region src/features/card/Checker.ts
var CardInputChecker = {
	isCardNumberComplete(cardNumber) {
		return detectCardNetwork(cardNumber)?.length === cardNumber.length;
	},
	isCardBrandComplete(value) {
		return Boolean(value);
	},
	isCardExpiryDateComplete(cardExpiryDate) {
		if (cardExpiryDate.length === CARD_INPUT.EACH_EXPIRY_DATE_LENGTH * 2) return true;
		return false;
	},
	isCardCVCComplete(cardCVC) {
		if (cardCVC.length === CARD_INPUT.CVC_LENGTH) return true;
		return false;
	},
	isCardPasswordComplete(password) {
		if (password.length === CARD_INPUT.PASSWORD_LENGTH) return true;
		return false;
	}
};
//#endregion
//#region src/features/card/style/CardStyles.ts
var CardFieldset = styled.fieldset`
  border: none;
  display: flex;
  gap: 0.625rem;
  padding: 0;
  margin: 0;
`;
var CardLegend = styled.legend`
  font-size: 12px;
  margin: 8px 0;
`;
var CardInputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;
var CardInputLabel = styled.label`
  font-size: 12px;
`;
//#endregion
//#region src/features/card/components/form/CardNumberInput.tsx
var CARD_NUMBER_FIELDS = [
	"firstDigits",
	"secondDigits",
	"thirdDigits",
	"fourthDigits"
];
function CardNumberInput({ cardNumber, setCardNumber }) {
	const [isError, setError] = useState({
		firstDigits: {
			state: false,
			message: ""
		},
		secondDigits: {
			state: false,
			message: ""
		},
		thirdDigits: {
			state: false,
			message: ""
		},
		fourthDigits: {
			state: false,
			message: ""
		}
	});
	const [networkBrandError, setNetworkBrandError] = useState({
		state: false,
		message: ""
	});
	const { ref, changeFocus } = useFocusChain(Object.keys(cardNumber).length, CARD_INPUT.EACH_NUMBER_LENGTH);
	const runNetworkBrandValidation = (value) => {
		try {
			Validator.isValidNetworkBrand(value);
			setNetworkBrandError({
				state: false,
				message: ""
			});
		} catch (err) {
			setNetworkBrandError({
				state: true,
				message: err.message
			});
		}
	};
	const changeCardNumber = (e, index) => {
		const { value } = e.target;
		const field = CARD_NUMBER_FIELDS[index - 1];
		const newCardNumber = {
			...cardNumber,
			[field]: value
		};
		const fullNumber = joinCardNumber(Object.values(newCardNumber), CARD_INPUT.EACH_NUMBER_LENGTH);
		const errorReport = runValidation([() => Validator.isNumber(value)]);
		setError({
			...isError,
			[field]: errorReport
		});
		runNetworkBrandValidation(fullNumber);
		setCardNumber(newCardNumber);
		changeFocus(e, index);
	};
	const handleBlurCardNumber = (e, index) => {
		const { value } = e.target;
		const field = CARD_NUMBER_FIELDS[index - 1];
		if (!CardInputChecker.isCardNumberComplete(Object.values(cardNumber).join(""))) {
			const errorReport = runValidation([() => Validator.isValidCardNumberLength(value)]);
			setError({
				...isError,
				[field]: errorReport
			});
		}
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs(CardFieldset, {
			id: "card-number-input-container",
			children: [
				/* @__PURE__ */ jsx(CardLegend, { children: "카드 번호" }),
				/* @__PURE__ */ jsx(CardInput, {
					id: "first-digits",
					type: "text",
					maxLength: CARD_INPUT.EACH_NUMBER_LENGTH,
					value: cardNumber.firstDigits,
					onChange: (e) => changeCardNumber(e, 1),
					onBlur: (e) => handleBlurCardNumber(e, 1),
					placeholder: "1234",
					ref: (node) => ref(1, node),
					isError: isError.firstDigits.state
				}),
				/* @__PURE__ */ jsx(CardInput, {
					id: "second-digits",
					type: "text",
					maxLength: CARD_INPUT.EACH_NUMBER_LENGTH,
					value: cardNumber.secondDigits,
					onChange: (e) => changeCardNumber(e, 2),
					onBlur: (e) => handleBlurCardNumber(e, 2),
					placeholder: "1234",
					ref: (node) => ref(2, node),
					isError: isError.secondDigits.state
				}),
				/* @__PURE__ */ jsx(CardInput, {
					id: "third-digits",
					type: "text",
					maxLength: CARD_INPUT.EACH_NUMBER_LENGTH,
					value: cardNumber.thirdDigits,
					onChange: (e) => changeCardNumber(e, 3),
					onBlur: (e) => handleBlurCardNumber(e, 3),
					placeholder: "1234",
					ref: (node) => ref(3, node),
					isError: isError.thirdDigits.state
				}),
				/* @__PURE__ */ jsx(CardInput, {
					id: "fourth-digits",
					type: "text",
					maxLength: CARD_INPUT.EACH_NUMBER_LENGTH,
					value: cardNumber.fourthDigits,
					onChange: (e) => changeCardNumber(e, 4),
					onBlur: (e) => handleBlurCardNumber(e, 4),
					placeholder: "1234",
					ref: (node) => ref(4, node),
					isError: isError.fourthDigits.state
				})
			]
		}),
		/* @__PURE__ */ jsx(NetworkBrandErrorMessage, { message: networkBrandError["message"] }),
		/* @__PURE__ */ jsx(ErrorMessage, { messages: sanitizeErrors(Object.values(isError).map((err) => err.message)) })
	] });
}
//#endregion
//#region src/features/card/components/form/CardExpiryDateInput.tsx
function CardExpiryDateInput({ cardExpiryDate, setCardExpiryDate }) {
	const [isError, setError] = useState({
		expiryMonth: {
			state: false,
			message: ""
		},
		expiryYear: {
			state: false,
			message: ""
		}
	});
	const { ref, changeFocus } = useFocusChain(Object.keys(cardExpiryDate).length, CARD_INPUT.EACH_EXPIRY_DATE_LENGTH);
	const changeCardExpiryMonth = (e, index) => {
		const { value } = e.target;
		const errorReport = runValidation([() => Validator.isNumber(value), () => Validator.isValidMonth(value)]);
		setError({
			...isError,
			expiryMonth: errorReport
		});
		if (errorReport.state) return;
		setCardExpiryDate({
			...cardExpiryDate,
			expiryMonth: value
		});
		changeFocus(e, index);
	};
	const changeCardExpiryYear = (e, index) => {
		const { value } = e.target;
		const errorReport = runValidation([() => Validator.isNumber(value), () => Validator.isValidYear(value)]);
		setError({
			...isError,
			expiryYear: errorReport
		});
		if (errorReport.state) return;
		setCardExpiryDate({
			...cardExpiryDate,
			expiryYear: value
		});
		changeFocus(e, index);
	};
	const handleBlurCardExpiryDate = (e, field) => {
		const { value } = e.target;
		const errorReport = runValidation([() => Validator.isValidCardExpiryDateLength(value)]);
		setError({
			...isError,
			[field]: errorReport
		});
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(CardFieldset, { children: [
		/* @__PURE__ */ jsx(CardLegend, { children: "유효기간" }),
		/* @__PURE__ */ jsx(CardInput, {
			type: "text",
			id: "expiry-month",
			ref: (node) => ref(1, node),
			onChange: (e) => changeCardExpiryMonth(e, 1),
			onBlur: (e) => handleBlurCardExpiryDate(e, "expiryMonth"),
			maxLength: CARD_INPUT.EACH_EXPIRY_DATE_LENGTH,
			value: cardExpiryDate.expiryMonth,
			isError: isError.expiryMonth.state,
			placeholder: "MM"
		}),
		/* @__PURE__ */ jsx(CardInput, {
			type: "text",
			id: "expiry-year",
			ref: (node) => ref(2, node),
			onChange: (e) => changeCardExpiryYear(e, 2),
			onBlur: (e) => handleBlurCardExpiryDate(e, "expiryYear"),
			maxLength: CARD_INPUT.EACH_EXPIRY_DATE_LENGTH,
			value: cardExpiryDate.expiryYear,
			isError: isError.expiryYear.state,
			placeholder: "YY"
		})
	] }), /* @__PURE__ */ jsx(ErrorMessage, { messages: sanitizeErrors(Object.values(isError).map((err) => err.message)) })] });
}
//#endregion
//#region src/features/card/components/form/CardCVCInput.tsx
function CardCVCInput({ cardCVC, setCardCVC }) {
	const [isError, setError] = useState({
		state: false,
		message: ""
	});
	const changeCardCVC = (e) => {
		const { value } = e.target;
		const errorReport = runValidation([() => Validator.isNumber(value)]);
		setError(errorReport);
		if (errorReport.state) return;
		setCardCVC(value);
	};
	const handleBlurCVC = (e) => {
		const { value } = e.target;
		setError(runValidation([() => Validator.isValidCardCVCLength(value)]));
	};
	return /* @__PURE__ */ jsxs(CardInputFieldContainer, { children: [
		/* @__PURE__ */ jsx(CardInputLabel, {
			htmlFor: "card-cvc-input",
			children: "CVC"
		}),
		/* @__PURE__ */ jsx(CardInput, {
			type: "text",
			maxLength: CARD_INPUT.CVC_LENGTH,
			placeholder: "123",
			id: "card-cvc-input",
			value: cardCVC,
			onChange: changeCardCVC,
			onBlur: handleBlurCVC
		}),
		/* @__PURE__ */ jsx(ErrorMessage, { messages: sanitizeErrors([isError["message"]]) })
	] });
}
//#endregion
//#region src/features/card/components/form/CardPasswordInput.tsx
function CardPasswordInput({ cardPassword, setCardPassword }) {
	const [isError, setError] = useState({
		state: false,
		message: ""
	});
	const changeCardPassword = (e) => {
		const { value } = e.target;
		const errorReport = runValidation([() => Validator.isNumber(value)]);
		setError(errorReport);
		if (errorReport.state) return;
		setCardPassword(value);
	};
	const handleBlurPassword = (e) => {
		const { value } = e.target;
		setError(runValidation([() => Validator.isValidCardPassswordLength(value)]));
	};
	return /* @__PURE__ */ jsxs(CardInputFieldContainer, { children: [
		/* @__PURE__ */ jsx(CardInputLabel, { children: "비밀번호 앞 2자리" }),
		/* @__PURE__ */ jsx(CardInput, {
			type: "text",
			maxLength: CARD_INPUT.PASSWORD_LENGTH,
			placeholder: "비밀번호",
			value: cardPassword,
			onChange: changeCardPassword,
			onBlur: handleBlurPassword
		}),
		/* @__PURE__ */ jsx(ErrorMessage, { messages: sanitizeErrors([isError["message"]]) })
	] });
}
//#endregion
//#region src/features/card/ProgressManager.ts
function calculateCreateCardCurrentProgress(cardNumber, cardBrand, cardExpiryDate, cardCVC, cardPassword) {
	const currentProgress = {
		cardNumberIsComplete: true,
		cardBrandIsComplete: false,
		cardExpiryDateIsComplete: false,
		cardCVCIsComplete: false,
		cardPasswordIsComplete: false,
		allComplete: false
	};
	if (!CardInputChecker.isCardNumberComplete(cardNumber)) return currentProgress;
	currentProgress["cardBrandIsComplete"] = true;
	if (!CardInputChecker.isCardBrandComplete(cardBrand)) return currentProgress;
	currentProgress["cardExpiryDateIsComplete"] = true;
	if (!CardInputChecker.isCardExpiryDateComplete(cardExpiryDate)) return currentProgress;
	currentProgress["cardCVCIsComplete"] = true;
	if (!CardInputChecker.isCardCVCComplete(cardCVC)) return currentProgress;
	currentProgress["cardPasswordIsComplete"] = true;
	if (!CardInputChecker.isCardPasswordComplete(cardPassword)) return currentProgress;
	currentProgress["allComplete"] = true;
	return currentProgress;
}
//#endregion
//#region src/features/card/components/form/CardBrandSelect.tsx
function CardBrandSelect({ cardBrand, setCardBrand }) {
	const changeCardBrand = (value) => {
		setCardBrand(value);
	};
	return /* @__PURE__ */ jsxs(Select, {
		defaultValue: cardBrand ?? "",
		onChange: (e) => changeCardBrand(e.target.value),
		"aria-label": "select card brand",
		id: "card-brand-select",
		children: [
			/* @__PURE__ */ jsx("option", {
				value: "",
				disabled: true,
				hidden: true,
				children: "카드사를 선택해주세요."
			}),
			/* @__PURE__ */ jsx("option", {
				value: "bc",
				children: "BC카드"
			}),
			/* @__PURE__ */ jsx("option", {
				value: "sinhan",
				children: "신한카드"
			}),
			/* @__PURE__ */ jsx("option", {
				value: "kakao",
				children: "카카오뱅크"
			}),
			/* @__PURE__ */ jsx("option", {
				value: "hyundai",
				children: "현대카드"
			}),
			/* @__PURE__ */ jsx("option", {
				value: "woori",
				children: "우리카드"
			}),
			/* @__PURE__ */ jsx("option", {
				value: "lotte",
				children: "롯데카드"
			}),
			/* @__PURE__ */ jsx("option", {
				value: "hana",
				children: "하나카드"
			}),
			/* @__PURE__ */ jsx("option", {
				value: "kookmin",
				children: "국민카드"
			})
		]
	});
}
var Select = styled.select`
  display: block;
  width: 100%;
  padding: 8px;
`;
//#endregion
//#region src/features/card/components/form/CardForm.tsx
function CardForm({ cardNumber, setCardNumber, cardExpiryDate, setCardExpiryDate, cardBrand, setCardBrand, cardCVC, setCardCVC, cardPassword, setCardPassword }) {
	const { cardNumberIsComplete, cardBrandIsComplete, cardExpiryDateIsComplete, cardCVCIsComplete, cardPasswordIsComplete, allComplete } = calculateCreateCardCurrentProgress(Object.values(cardNumber).join(""), cardBrand, Object.values(cardExpiryDate).join(""), cardCVC, cardPassword);
	const navigate = useNavigate();
	const { firstDigits } = cardNumber;
	const loadDonePage = (e) => {
		e.preventDefault();
		navigate("/card/done/", { state: {
			firstDigitsCardNumber: firstDigits,
			cardBrand
		} });
	};
	return /* @__PURE__ */ jsxs(CardFormContainer, {
		onSubmit: loadDonePage,
		children: [
			/* @__PURE__ */ jsx(CardSection, {
				title: "비밀번호를 입력해 주세요",
				subTitle: "앞의 2자리를 입력해주세요.",
				display: cardPasswordIsComplete,
				children: /* @__PURE__ */ jsx(CardPasswordInput, {
					cardPassword,
					setCardPassword
				})
			}),
			/* @__PURE__ */ jsx(CardSection, {
				title: "CVC 번호를 입력해 주세요",
				display: cardCVCIsComplete,
				children: /* @__PURE__ */ jsx(CardCVCInput, {
					cardCVC,
					setCardCVC
				})
			}),
			/* @__PURE__ */ jsx(CardSection, {
				title: "카드 유효기간을 입력해 주세요",
				subTitle: "월/년도(MMYY)를 순서대로 입력해 주세요.",
				display: cardExpiryDateIsComplete,
				children: /* @__PURE__ */ jsx(CardExpiryDateInput, {
					cardExpiryDate,
					setCardExpiryDate
				})
			}),
			/* @__PURE__ */ jsx(CardSection, {
				title: "카드사를 선택해 주세요",
				subTitle: "현재 국내 카드사만 가능합니다.",
				display: cardBrandIsComplete,
				children: /* @__PURE__ */ jsx(CardBrandSelect, {
					cardBrand,
					setCardBrand
				})
			}),
			/* @__PURE__ */ jsx(CardSection, {
				title: "결제할 카드 번호를 입력해 주세요",
				subTitle: "본인 명의의 카드만 결제 가능합니다.",
				display: cardNumberIsComplete,
				children: /* @__PURE__ */ jsx(CardNumberInput, {
					cardNumber,
					setCardNumber
				})
			}),
			/* @__PURE__ */ jsx(Button, {
				type: "submit",
				disabled: !allComplete,
				children: "확인"
			})
		]
	});
}
var CardFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 24px 30px 20px 30px;
  box-sizing: border-box;
`;
//#endregion
//#region src/features/card/components/CardCreate.tsx
function CardCreate() {
	const [cardNumber, setCardNumber] = useState({
		firstDigits: "",
		secondDigits: "",
		thirdDigits: "",
		fourthDigits: ""
	});
	const [cardExpiryDate, setCardExpiryDate] = useState({
		expiryMonth: "",
		expiryYear: ""
	});
	const [cardBrand, setCardBrand] = useState(null);
	const [cardCVC, setCardCVC] = useState("");
	const [cardPassword, setCardPassword] = useState("");
	return /* @__PURE__ */ jsxs(CardContainer, { children: [/* @__PURE__ */ jsx(CardPreview, {
		cardNumber,
		cardExpiryDate,
		cardBrand
	}), /* @__PURE__ */ jsx(CardForm, {
		cardNumber,
		setCardNumber,
		cardExpiryDate,
		setCardExpiryDate,
		cardBrand,
		setCardBrand,
		cardCVC,
		setCardCVC,
		cardPassword,
		setCardPassword
	})] });
}
var CardContainer = styled.div`
  margin-bottom: auto;
  margin-top: auto;
`;
//#endregion
//#region src/pages/card/Create.tsx
var Create_default = UNSAFE_withComponentProps(function CardCreatePage() {
	return /* @__PURE__ */ jsx(CardCreate, {});
});
//#endregion
export { Create_default as default };
