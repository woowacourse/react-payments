import { StyledSelectItem } from './SelectItem.styled';

import { Text } from '../../Text';

type Props = {
  option: string;
  onClick: () => void;
};

export const SelectItem = ({ option, onClick }: Props) => {
  return (
    <StyledSelectItem onClick={onClick}>
      <Text variant="Caption" fontWeight="regular">
        {option}
      </Text>
    </StyledSelectItem>
  );
};
