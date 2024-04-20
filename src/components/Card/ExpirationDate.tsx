import styled from "styled-components";

const ExpirationDate = ({
  expirationDate,
}: {
  expirationDate: Map<string, string>;
}) => {
  const month = expirationDate.get("0");
  const year = expirationDate.get("1");

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-start", height: "20px" }}
    >
      {month && (
        <ExpirationDateStyled>
          {month}/{year && <ExpirationDateStyled>{year}</ExpirationDateStyled>}
        </ExpirationDateStyled>
      )}
    </div>
  );
};

const ExpirationDateStyled = styled.span`
  color: white;
`;

export default ExpirationDate;
