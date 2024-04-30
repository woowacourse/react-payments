import styled from "@emotion/styled";

import THEME from "../../styles/theme";
import IconKind from "../../@types/IconKind";
import IconSource from "../../constants/IconSource";

interface IconProps {
  kind: IconKind;
}

const Icon = ({ kind }: IconProps) => {
  return (
    <CheckBoxContainer>
      <Img src={IconSource[kind]} />
    </CheckBoxContainer>
  );
};

export default Icon;

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
