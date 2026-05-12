import { useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import RegisterCard, { type RegisteredCard } from './pages/RegisterCard';
import RegisterComplete from './pages/RegisterComplete';
import { CARD_COMPANY_LABEL } from './constants/cardCompanies';
import { theme } from './styles/theme';
import { globalStyles } from './styles/globalStyles';

function App() {
  const [registeredCard, setRegisteredCard] = useState<RegisteredCard | null>(null);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {registeredCard === null ? (
        <RegisterCard onComplete={setRegisteredCard} />
      ) : (
        <RegisterComplete
          cardNumberPrefix={registeredCard.cardNumberPrefix}
          cardCompanyName={CARD_COMPANY_LABEL[registeredCard.cardCompany]}
          onConfirm={() => setRegisteredCard(null)}
        />
      )}
    </ThemeProvider>
  );
}

export default App;
