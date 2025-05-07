import { Button } from '@/components/common/Button';
import { Text } from '@/components/common/Text';

type SubmitButtonProps = {
  children: React.ReactNode;
  onSubmit: () => void;
};

export const SubmitButton = ({ children, onSubmit }: SubmitButtonProps) => {
  return (
    <Button
      height="60px"
      borderType="square"
      position="sticky"
      left="0"
      right="0"
      bottom="0"
      onClick={onSubmit}
    >
      <Text variant="Title" fontWeight="bold" color="white">
        {children}
      </Text>
    </Button>
  );
};
