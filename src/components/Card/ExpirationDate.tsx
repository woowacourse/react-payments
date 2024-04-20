import styled from "styled-components";

const ExpirationDate = ({
  expirationDate,
}: {
  expirationDate: Map<string, string>;
}) => {
  const keyArray = [...expirationDate.keys()];

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-start", height: "20px" }}
    >
      {
        <ExpirationDateStyled key={keyArray[0]}>
          {expirationDate.get("0")}
          {expirationDate.get("1") && (
            <ExpirationDateStyled>/</ExpirationDateStyled>
          )}
        </ExpirationDateStyled>
      }
      {expirationDate.get("1") && (
        <ExpirationDateStyled key={keyArray[1]}>
          {expirationDate.get("1")}
        </ExpirationDateStyled>
      )}
    </div>
  );
};

const ExpirationDateStyled = styled.span`
  color: white;
`;

export default ExpirationDate;
