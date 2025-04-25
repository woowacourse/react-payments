import { Form } from '../common/Form';

interface CarRegisterFormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const CardRegisterForm = ({
  children,
  onSubmit,
}: CarRegisterFormProps) => <Form onSubmit={onSubmit}>{children}</Form>;

export default CardRegisterForm;
