import { CARD_ISSUER } from '../../constants/inputInformation';
import InputGroup from '../common/InputGroup';
import Select from '../common/Select';

const CardIssuerSelect = ({ setValue }: { setValue: (value: string) => void }) => {
  const { name, title, subtitle, options, optionValues, placeholder } = CARD_ISSUER;

  return (
    <>
      <InputGroup title={title} subtitle={subtitle}>
        <Select
          options={options}
          optionValues={optionValues}
          setValue={setValue}
          name={name}
          placeholder={placeholder}
        />
      </InputGroup>
    </>
  );
};

export default CardIssuerSelect;
