import styled from "styled-components";

const cardTypeColors = {
  "": "#000000",
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
};

export const StyledContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "cardType",
})<{
  cardType: keyof typeof cardTypeColors | "";
}>`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 250px;
  max-width: 400px;
  width: 100%;
  background-color: ${({ cardType }) => {
    return cardTypeColors[cardType] || "#000000";
  }};
  border-radius: 8px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 15px 20px;
`;

export const StyledIconWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 30px;
`;

export const StyledMagnetic = styled.div`
  width: 100%;
  max-width: 50px;
  height: 30px;
  border-radius: 6px;
  background-color: #ddcd78;
`;

export const StyledLogoWrap = styled.div`
  width: 100%;
  max-width: 50px;
  height: 30px;
  border-radius: 6px;
  background-color: #ffffff;
`;

export const StyledCardNumberWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 10px;
`;
export const StyledCardNumber = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  text-align: left;
  letter-spacing: 16%;
  color: #ffffff;
`;

export const StyledExpirationPeriod = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 16%;
  color: #ffffff;
`;
