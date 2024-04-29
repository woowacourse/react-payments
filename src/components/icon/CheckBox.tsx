import styled from "@emotion/styled";
import CheckImg from "/public/img/Check.png";
import THEME from "../../styles/theme";

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
  background: ${THEME.PRIMARY.darkGrey};
  border-radius: 50%;
  text-align: center;
  width: 76px;
  height: 76px;
`;

const Img = styled.img`
  margin: 0 auto;
`;
