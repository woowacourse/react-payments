import styled from "styled-components";
import CardNumber from "./CardNumber";

const Styled = {
  UserNameLayout: styled.div`
    display: flex;
    justifycontent: flex-start;
    height: 20px;
  `,
};

const UserName = ({ userName }: { userName: string[] }) => {
  return (
    <Styled.UserNameLayout>
      <CardNumber key="userName" number={userName} />
    </Styled.UserNameLayout>
  );
};

export default UserName;
