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
