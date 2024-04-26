import styled from "@emotion/styled";
import CheckImg from "/public/img/Check.png";

const CheckBox = () => {
  return (
    <CheckBoxContainer>
      <Img src={CheckImg} />
    </CheckBoxContainer>
  );
};

export default CheckBox;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  background: #333333;
  border-radius: 50%;
  text-align: center;
  width: 76px;
  height: 76px;
`;

const Img = styled.img`
  margin: 0 auto;
`;
