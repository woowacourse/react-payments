import styled from "styled-components";

const CVCWrapper = styled.div`
  color: white;
  font-size: 14px;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 15px;
`;

const CVC = ({ CVCNumber }: { CVCNumber: string }) => {
  return <CVCWrapper>{CVCNumber}</CVCWrapper>;
};

export default CVC;
