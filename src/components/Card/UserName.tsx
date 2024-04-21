import styled from "styled-components";

const UserName = ({ userName }: { userName: Map<string, string> }) => {
  const userFullName = userName.get("0");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        height: "20px",
      }}
    >
      {<UserNameStyled>{userFullName}</UserNameStyled>}
    </div>
  );
};

const UserNameStyled = styled.span`
  color: white;
`;

export default UserName;
