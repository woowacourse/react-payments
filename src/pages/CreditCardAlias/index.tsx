import { useContext } from 'react';

import { CreditCardRegisterContext } from '@Contexts/CreditCardRegisterContext';

function CreditCardAlias() {
  const { creditCard } = useContext(CreditCardRegisterContext);

  return <div>sdfsdf</div>;
}

export default CreditCardAlias;
