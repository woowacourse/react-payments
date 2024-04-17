import styled from "styled-components";

export const CardPreviewContainer = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background: #333333;
  box-shadow: 3px 3px 5px 0px #00000040;
  margin: auto;
`;

export const ChipSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 12px;
`;

export const ICChip = styled.div`
  width: 36px;
  height: 22px;
  background: #ddcd78;
  border: 0.5px solid #ddcd781a;
  border-radius: 3px;
`;

export const CardBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 22px;
  background: #ffffff;
  border: 0.5px solid #0000001a;
  border-radius: 3px;

  img {
    width: 60%;
  }
`;

export const CardInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.16em;
  text-align: left;
  color: #ffffff;
  margin: 6px 17px;
`;
