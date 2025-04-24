import { StyledSelected } from './Selected.styled';

import { Flex } from '../../Flex';
import { CustomImage } from '../../Image';
import { Text } from '../../Text';

type Props = {
  selectedItem: string | null;
  arrowIconSrc: string;
  placeholder: string;
};

export const SelectedPreview = ({ selectedItem, arrowIconSrc, placeholder }: Props) => {
  return (
    <StyledSelected>
      <Flex direction="row" justifyContent="space-between">
        <Text variant="Caption" fontWeight="regular">
          {selectedItem ? selectedItem : placeholder}
        </Text>
        <CustomImage src={arrowIconSrc} alt="arrow" width="16px" height="16px" />
      </Flex>
    </StyledSelected>
  );
};
