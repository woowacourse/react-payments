import styled from "@emotion/styled";
import { useExpireDateContext } from "../../../context/expireDate/ExpireDateContext";

export default function Input() {
  const expireDateContext = useExpireDateContext();

  return (
    <Wrapper>
      <Container>
        <FieldWrapper>
          <MonthInput
            value={expireDateContext.expireDate.month}
            placeholder="MM"
            maxLength={2}
            onBlur={() => expireDateContext.handleMonthBlur()}
            onChange={(e) =>
              expireDateContext.handleMonthChange(e.target.value)
            }
            $hasError={!!expireDateContext.expireDateError.month}
          />
          <ErrorContainer>
            {expireDateContext.expireDateError.month && (
              <Error>{expireDateContext.expireDateError.month}</Error>
            )}
          </ErrorContainer>
        </FieldWrapper>

        <FieldWrapper>
          <YearInput
            value={expireDateContext.expireDate.year}
            placeholder="YY"
            maxLength={2}
            onBlur={() => expireDateContext.handleYearBlur()}
            onChange={(e) => expireDateContext.handleYearChange(e.target.value)}
            $hasError={!!expireDateContext.expireDateError.year}
          />
          <ErrorContainer>
            {expireDateContext.expireDateError.year && (
              <Error>{expireDateContext.expireDateError.year}</Error>
            )}
          </ErrorContainer>
        </FieldWrapper>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
  width: 100%;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MonthInput = styled.input<{ $hasError: boolean }>`
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
  outline: none;
  ${(props) =>
    props.$hasError &&
    `
    border: 1px solid red;
  `}
`;

const YearInput = styled.input<{ $hasError: boolean }>`
  width: 100%;
  box-sizing: border-box;
  min-width: 0;
  height: 32px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 6px;
  padding: 4px;
  outline: none;
  ${(props) =>
    props.$hasError &&
    `
    border: 1px solid red;
  `}
`;

const ErrorContainer = styled.div`
  min-height: 14px;
  margin-top: 4px;
`;

const Error = styled.p`
  padding: 0;
  margin: 0;
  font-size: 9.5px;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0%;
  color: rgba(255, 61, 61, 1);
`;
