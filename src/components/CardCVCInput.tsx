import { useState } from 'react';

interface CardCVCInputProps {
  cvc: string;
  setCVC: (value: string) => void;
}

function CardCVCInput(props: CardCVCInputProps) {
  const [isCVCError, setIsCVCError] = useState<null | string>(null);

  const validateCVC = () => {
    if (props.cvc.length < 3) return setIsCVCError('CVC는 3자리로 입력해주세요');
    return setIsCVCError(null);
  };

  return (
    <div>
      <input
        type="number"
        min={0}
        max={999}
        placeholder="CVC"
        value={props.cvc}
        onChange={(e) => props.setCVC(e.target.value)}
        onBlur={() => validateCVC()}
        style={isCVCError ? { borderColor: 'red' } : {}}
      />
      <p>{isCVCError}</p>
    </div>
  );
}

export default CardCVCInput;
