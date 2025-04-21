import styled from '@emotion/styled';
import InputAreaHeader from '../common/InputAreaHeader';
import InputTexts from '../common/InputTexts';

export interface ExpirationPeriodInputsViewProps {
  period: string[];
  errorMessage: string;
  isErrors: boolean[];
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const ExpirationPeriodInputsView = ({
  period,
  errorMessage,
  isErrors,
  handleInputChange,
  onFocus,
  onBlur,
}: ExpirationPeriodInputsViewProps) => {
  return (
    <Container data-testid="expiration-component">
      <InputAreaHeader
        title="카드 유효기간을 입력해 주세요"
        caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputTexts
        label="유효기간"
        placeholder={['MM', 'YY']}
        state={period}
        onChange={handleInputChange}
        isErrors={isErrors}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};

export default ExpirationPeriodInputsView;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.error};
  height: ${({ theme }) => theme.fontSizes.caption};
`;
