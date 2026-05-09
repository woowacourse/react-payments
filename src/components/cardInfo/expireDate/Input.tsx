import styled from "@emotion/styled";
import { useExpireDateContext } from "../../../context/expireDate/ExpireDateContext";

export default function Input() {
  const expireDateContext = useExpireDateContext();

  return (
    <Wrapper>
      <Container>
        <MonthInput
          value={expireDateContext.expireDate.month}
          placeholder="MM"
          maxLength={2}
          onChange={(e) => expireDateContext.handleMonthChange(e.target.value)}
          $hasError={!!expireDateContext.expireDateError.month}
        />
        {expireDateContext.expireDateError.month && (
          <Error>{expireDateContext.expireDateError.month}</Error>
        )}

        <YearInput
          value={expireDateContext.expireDate.year}
          placeholder="YY"
          maxLength={2}
          onChange={(e) => expireDateContext.handleYearChange(e.target.value)}
          $hasError={!!expireDateContext.expireDateError.year}
        />
        {expireDateContext.expireDateError.year && (
          <Error>{expireDateContext.expireDateError.year}</Error>
        )}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const MonthInput = styled.input<{ $hasError: boolean }>`
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
  ${(props) =>
    props.$hasError &&
    `
    border: 1px solid red;
  `}
`;

const YearInput = styled.input<{ $hasError: boolean }>`
  flex: 1;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
  ${(props) =>
    props.$hasError &&
    `
    border: 1px solid red;
  `}
`;

const Error = styled.p`
  padding: 0;
  margin: 0 0;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: rgba(255, 61, 61, 1);
`;
