import styled from "@emotion/styled";
import { useExpireDateInput } from "../../../hooks/useExpireDateInput";
import { type ExpireDateState } from "../../../types/types";

export default function Input({ expireDate, setExpireDate }: ExpireDateState) {
  const { expireDateError, handleMonthChange, handleYearChange } =
    useExpireDateInput(setExpireDate);

  return (
    <Wrapper>
      <Container>
        <MonthInput
          value={expireDate.month}
          placeholder="MM"
          maxLength={2}
          onChange={(e) => handleMonthChange(e.target.value)}
          $hasError={!!expireDateError.month}
        />
        {expireDateError.month && <Error>{expireDateError.month}</Error>}

        <YearInput
          value={expireDate.year}
          placeholder="YY"
          maxLength={2}
          onChange={(e) => handleYearChange(e.target.value)}
          $hasError={!!expireDateError.year}
        />
        {expireDateError.year && <Error>{expireDateError.year}</Error>}
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
