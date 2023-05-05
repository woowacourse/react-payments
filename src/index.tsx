import { ModalProvider } from 'noah-modal';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from 'router';

import CreditCardCompanyModal from '@Pages/CreditCardRegister/CreditCardCompanyModal';

import CreditCardRegisterProvider from '@Contexts/CreditCardRegister/CreditCardRegisterProvider';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <CreditCardRegisterProvider>
      <ModalProvider
        modals={[
          {
            title: '카드사 등록',
            component: <CreditCardCompanyModal />,
            name: 'creditCardCompany',
            delayMsTime: 500,
          },
        ]}
      >
        <RouterProvider router={router} />
      </ModalProvider>
    </CreditCardRegisterProvider>
  </React.StrictMode>,
);
