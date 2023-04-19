import styled from "styled-components";

const CardPreview = () => {
  return (
    <Card>
      <ICChip></ICChip>
      <NumberContainer>
        <span>1234</span>
        <span>1234</span>
        <span>••••</span>
        <span>••••</span>
      </NumberContainer>
      <InfoContainer>
        <span>제레미</span>
        <span>04 / 21</span>
      </InfoContainer>
    </Card>
  );
};

export default CardPreview;

const Card = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 4px;

  background-color: #333333;

  height: 133px;
  width: 213px;

  border-radius: 5px;
  padding: 14px;

  font-size: 14px;
  color: white;
`;

const ICChip = styled.div`
  position: absolute;
  background-color: #cbba64;

  height: 26px;
  width: 40px;

  top: 47px;
  left: 14px;

  border-radius: 4px;
`;
const NumberContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;

  span {
    text-align: center;
    width: 40px;
    letter-spacing: 2px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0px 4px;

  font-size: 12px;
`;
