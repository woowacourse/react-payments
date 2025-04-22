import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 250px;
  max-width: 400px;
  width: 100%;
  background-color: #333333;
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
