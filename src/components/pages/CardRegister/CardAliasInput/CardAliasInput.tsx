import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { useCardAlias } from '../../../../hooks/card/card';
import { CardRegisterInfo } from '../../../../types/card.type';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardAliasInput.styles';

const CardAliasInput = () => {
  const { cardRegisterInfo, handleCardInfo } = useCardRegisterContext();
  const { defaultConditions } = useCardAlias();

  if (!cardRegisterInfo) {
    return null;
  }

  const { cardAlias } = cardRegisterInfo;

  const onChangeValue = (value: CardRegisterInfo['cardAlias']) => {
    handleCardInfo('cardAlias', value);
  };

  return (
    <Flex dir='column'>
      <Input>
        <Input.Field
          name='cardAlias'
          id='cardAlias'
          value={cardAlias}
          onChange={({ target: { value } }) => {
            onChangeValue(value);
          }}
          {...defaultConditions}
        >
          <Styled.Input />
        </Input.Field>
      </Input>
    </Flex>
  );
};

export default CardAliasInput;
