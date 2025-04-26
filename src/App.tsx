import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';
import { CardFormProvider, useCardForm } from './contexts/CardFormContext';
import Preview from './components/Preview';
import BrandSelect from './components/BrandSelect';
import NumberInputs from './components/NumberInputs';
import ExpirationPeriodInputs from './components/ExpirationPeriodInputs';
import CVCNumberInput from './components/CVCNumberInput';
import PasswordInput from './components/PasswordInput';
import styled from '@emotion/styled';

const ConfirmButton = () => {
  const { isFormValid } = useCardForm();
  return <>{isFormValid && <SubmitButton type="submit">확인</SubmitButton>}</>;
};

const App = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('카드 정보가 제출되었습니다.');
  };

  return (
    <ThemeProvider theme={theme}>
      <CardFormProvider>
        <Main>
          <Preview />

          <form onSubmit={onSubmit}>
            <Column>
              <PasswordInput />
              <CVCNumberInput />
              <ExpirationPeriodInputs />
              <BrandSelect />
              <NumberInputs />
            </Column>
            <ConfirmButton />
          </form>
        </Main>
      </CardFormProvider>
    </ThemeProvider>
  );
};

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 376px;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 24px;
  overflow: auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 0 28px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cardBrandColors.default};
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 16px;
  font-weight: 700;
  position: sticky;
  bottom: 0;
  height: 52px;
  cursor: pointer;
  text-align: center;
  border: none;
`;
