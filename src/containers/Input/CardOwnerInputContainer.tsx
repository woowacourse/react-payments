import { useContext, useState, useEffect } from 'react';
import CardOwnerInput from 'components/Modules/CardOwnerInput';
import { CardContext, CardContextValue } from 'context/CardContext';
import { englishRegex } from 'constant/regularExpression';
import validator from 'validation';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';

function CardOwnerInputContainer() {
  const { inputtedInfoDispatch } = useContext(CardContext) as CardContextValue;
  const [name, setName] = useState('');
  const [validation, setValidation] = useState(true);

  const onNameChange = ({ target, nativeEvent: { data } }: any) => {
    if (englishRegex.test(data) || !data) {
      const name = target.value.toUpperCase();

      setName(name);
      updateValidation(name);
    }
  };

  const updateValidation = (name: string) => {
    setValidation(validator.validateOwnerName(name));
  };

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.OWNER_NAME,
      value: name,
      valid: validation,
    });
  }, [name, validation]);

  return <CardOwnerInput name={name} validation={validation} onNameChange={onNameChange} />;
}

export default CardOwnerInputContainer;
