import CardPreview from '../components/CardPreview';
import CardInput from '../components/userCard/CardInput';
import { useRegisterCardForm } from '../hooks/useRegisterCardForm';

export default function RegisterCard() {
  const registerCardForm = useRegisterCardForm();

  return (
    <div
      css={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '45px',
        backgroundColor: theme.colors.white,
        width: '376px',
        minHeight: '100vh',
        margin: '0 auto',
        padding: '40px 0',
      })}
    >
      <CardPreview
        cardNumbers={registerCardForm.cardStatus.cardNumbers}
        cardExpiryDate={registerCardForm.cardExpiry.cardExpiryDate}
        cardBrand={registerCardForm.cardStatus.cardBrand}
        cardIssuer={registerCardForm.cardIssuer}
      />
      <CardInput {...registerCardForm} />
    </div>
  );
}
