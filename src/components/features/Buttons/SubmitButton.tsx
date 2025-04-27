import { useNavigate } from 'react-router';

import { Button } from '@/components/common/Button';
import { Text } from '@/components/common/Text';

type SubmitButtonProps = {
  cardType: string;
  cardNumber: string;
  buttonText: string;
};

export const SubmitButton = ({ cardType, cardNumber, buttonText }: SubmitButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      height="60px"
      borderType="square"
      position="sticky"
      left="0"
      right="0"
      bottom="0"
      onClick={() => navigate('/result', { state: { cardType, cardNumber } })}
    >
      <Text variant="Title" fontWeight="bold" color="white">
        {buttonText}
      </Text>
    </Button>
  );
};
