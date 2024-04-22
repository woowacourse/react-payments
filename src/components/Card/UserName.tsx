import styled from "styled-components";
import CardNumber from "./CardNumber";

const Styled = {
  UserNameWrapper: styled.div`
    display: flex;
    justifycontent: flex-start;
    height: 20px;
  `,
};

const UserName = ({ userName }: { userName: string[] }) => {
  return (
    <Styled.UserNameWrapper>
      <CardNumber key="userName" number={userName} />
    </Styled.UserNameWrapper>
  );
};

export default UserName;
