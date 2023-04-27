import * as styled from './SelectBank';

import { BANKS } from '../../constants';

const SelectBank = (props) => {
  return (
    <styled.SelectBank>
      <styled.Banks>
        {Object.keys(BANKS).map((key) => (
          <styled.Bank key={key}>
            <styled.Icon>
              <img src={BANKS[key].logo} alt={`${BANKS[key].name}_logo`} />
            </styled.Icon>
            <styled.Name>{BANKS[key].name}</styled.Name>
          </styled.Bank>
        ))}
      </styled.Banks>
    </styled.SelectBank>
  );
};

export default SelectBank;
