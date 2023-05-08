import AppLayout from 'layouts/AppLayout';
import CardFormProvider from 'providers/CardFormProvider';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface StoryProviderProps {
  children: ReactNode;
}
function StoryProvider({ children }: StoryProviderProps) {
  return (
    <CardFormProvider>
      <BrowserRouter>
        <AppLayout>
          {children}
        </AppLayout>
      </BrowserRouter>
    </CardFormProvider>
  );
}
export default StoryProvider;
