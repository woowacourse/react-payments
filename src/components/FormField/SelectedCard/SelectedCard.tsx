import FormField from '../FormField';
import MESSAGE from '../../../constants/Message';
import { SelectedCardStateType } from '../../../hooks/useSelectedCardState';
import Dropdown from '../../Dropdown/Dropdown';

const { TITLE, CAPTION, OPTION } = MESSAGE;

interface SelectedCardProps {
  selectedCardState: SelectedCardStateType;
}

const SelectedCard = ({ selectedCardState }: SelectedCardProps) => {
  return (
    <FormField title={TITLE.cardSelect} caption={CAPTION.cardSelect}>
      <Dropdown
        optionArray={OPTION.cardSelect}
        selectText={TITLE.cardSelect}
        selectedOptionState={selectedCardState}
      />
    </FormField>
  );
};

export default SelectedCard;
