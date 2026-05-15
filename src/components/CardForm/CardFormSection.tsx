import type { ReactNode } from 'react';
import Flex from '../Common/Flex';
import Text from '../Common/Text';

interface CardFormSectionProps {
  isVisible?: boolean;
  children: ReactNode;
}

interface CardFormSectionTitleProps {
  children: ReactNode;
}

interface CardFormSectionDescriptionProps {
  children: ReactNode;
}

function CardFormSectionBase({ isVisible = true, children }: CardFormSectionProps) {
  if (!isVisible) return null;

  return (
    <Flex direction="column" gap={10}>
      {children}
    </Flex>
  );
}

function Title({ children }: CardFormSectionTitleProps) {
  return (
    <Text size="l" weight="bold">
      {children}
    </Text>
  );
}

function Description({ children }: CardFormSectionDescriptionProps) {
  return (
    <Text size="xs" color="description">
      {children}
    </Text>
  );
}

const CardFormSection = Object.assign(CardFormSectionBase, {
  Title,
  Description,
});

export default CardFormSection;
