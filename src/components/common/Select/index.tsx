import { Children, ComponentProps, ComponentPropsWithoutRef, useState } from 'react';

import {
  StyledSelectContainer,
  StyledOption,
  StyledSelectIcon,
  StyledTriggerButton,
  StyledOptionsContainer,
} from './Select.styled';

import { Flex } from '../Flex';
import { Text } from '../Text';

export type Props = {
  /**
   * The currently selected category to be displayed.
   */
  selectedOptions: string;
} & ComponentPropsWithoutRef<'div'>;

export const Select = ({ selectedOptions, children, ...props }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <StyledSelectContainer onClick={() => setIsOpen(!isOpen)} {...props}>
      <StyledTriggerButton>
        <Flex justifyContent="space-between">
          <Text variant="Body">{selectedOptions ?? '전체'}</Text>
          <StyledSelectIcon isOpen={isOpen} src="/public/images/arrow.png" alt="arrow" />
        </Flex>
      </StyledTriggerButton>

      {isOpen && <StyledOptionsContainer>{children}</StyledOptionsContainer>}
    </StyledSelectContainer>
  );
};

export type OptionProps = {
  /**
   * The currently selected category to be displayed.
   */
  option: string;
  /**
   * Callback function when a category is selected.
   */
  onSelectOption: (category: string) => void;
} & ComponentProps<'div'>;

const Option = ({ option, onSelectOption, ...props }: OptionProps) => {
  return (
    <StyledOption onClick={() => onSelectOption(option)} {...props}>
      {option}
    </StyledOption>
  );
};

Select.Option = Option;
