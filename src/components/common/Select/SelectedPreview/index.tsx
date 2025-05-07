import { StyledSelected } from './Selected.styled';

import { Flex } from '../../Flex';
import { Text } from '../../Text';
import { SelectArrow } from '../SelectArrow';
type Props = {
  selectedItem: string | null;
  isOpen: boolean;
  placeholder: string;
};

export const SelectedPreview = ({ selectedItem, isOpen, placeholder }: Props) => {
  return (
    <StyledSelected>
      <Flex direction="row" justifyContent="space-between">
        <Text variant="Caption" fontWeight="regular">
          {selectedItem ? selectedItem : placeholder}
        </Text>
        <SelectArrow isOpen={isOpen} />
      </Flex>
    </StyledSelected>
  );
};
