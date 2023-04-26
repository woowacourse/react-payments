import { useState } from 'react';
import type { Meta } from '@storybook/react';
import CardSecurityCode from '../../components/CardAddForm/CardSecurityCode/CardSecurityCode';

const meta = {
  title: 'Payments/Cards/CardSecurityCodeInput',
  component: CardSecurityCode,
  tags: ['autodocs'],
} satisfies Meta<typeof CardSecurityCode>;

export default meta;

// export const Default = () => {
//   const [securityCode, setSecurityCode] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   return (
//     <CardSecurityCode
//       onInputChange={(event) => {
//         if (event.target.value.length === event.target.maxLength) setIsValid(true);

//         setSecurityCode(event.target.value);
//       }}
//       value={securityCode}
//       isValid={isValid}
//     ></CardSecurityCode>
//   );
// };
