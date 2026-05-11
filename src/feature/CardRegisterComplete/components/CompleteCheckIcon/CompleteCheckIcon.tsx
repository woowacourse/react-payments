import styled from "styled-components";
import CheckIcon from "../../../../../public/images/CheckIcon.png";

const CompleteCheckIcon = () => {
  return (
    <Icon>
      <img src={CheckIcon} alt="완료 확인 아이콘"></img>
    </Icon>
  );
};

export default CompleteCheckIcon;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background-color: #333333;
`;
