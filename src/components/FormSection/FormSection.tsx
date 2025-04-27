import styled from '@emotion/styled';
import Text from '../Text/Text';
import { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const StyledFormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  animation: fadeSlideIn 0.5s ease-out;

  @keyframes fadeSlideIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const FormSection = ({ title, subtitle, children }: FormSectionProps) => {
  return (
    <StyledFormSection>
      <Text type="title" text={title} />
      {subtitle && <Text type="subTitle" text={subtitle} />}
      {children}
    </StyledFormSection>
  );
};
export default FormSection;
