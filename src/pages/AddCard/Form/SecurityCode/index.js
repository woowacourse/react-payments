import { Icon, Input } from '../../../../components';

export default function SecurityCode({ securityCode, setSecurityCode, setModalContents }) {
  return (
    <Input
      id="card-security-code"
      type="password"
      inputStyle={{ width: '5rem' }}
      label="보안코드(CVC/CVV)"
      maxLength="3"
      inputMode="numeric"
      value={securityCode}
      onChange={(event) => {
        const inputValue = event.target.value;

        if (isNaN(inputValue)) return;

        setSecurityCode(inputValue);
      }}
      textAlign="center"
    >
      <button
        type="button"
        className="security-code-guide-button"
        onClick={() => {
          setModalContents('questionMark');
        }}
      >
        <Icon.QuestionMark size="27px" />
      </button>
    </Input>
  );
}
