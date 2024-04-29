import styled from "styled-components";
import CVC from "./CVC";

const CardBackPreview = ({ CVCNumber }: { CVCNumber: Map<string, string> }) => {
  const cvcNumber = CVCNumber.get("0") ?? "";

  return (
    <CardBackFrame>
      <MagneticLine>
        <CVC CVCNumber={cvcNumber}></CVC>
      </MagneticLine>
    </CardBackFrame>
  );
};

const CardBackFrame = styled.div`
  background: #d5d5d5;
  width: 232px;
  height: 137px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 0px #00000040;
  position: relative;
`;

const MagneticLine = styled.div`
  color: white;
  background: #cbba64;
  width: 100%;
  height: 20%;
  position: relative;
  top: 85px;
`;

export default CardBackPreview;
