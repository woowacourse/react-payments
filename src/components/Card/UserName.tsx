import styled from "styled-components";

const UserName = ({ userName }: { userName: Map<string, string> }) => {
  const keyArray = [...userName.keys()];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "20px",
        height: "20px",
      }}
    >
      {
        <UserNameStyled key={keyArray[0]}>
          {userName.get(keyArray[0])}
        </UserNameStyled>
      }
    </div>
  );
};

const UserNameStyled = styled.span`
  color: white;
`;

export default UserName;
