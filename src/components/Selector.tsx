import { css } from '@emotion/react';
import { MouseEvent, useEffect, useState } from 'react';
import { CARD_PROVIDER_SELECT, CARD_PROVIDER_DEFAULT } from '../constants/cardInformation';

const selectorContainer = css({
  width: '100%',
});

interface SelectorType {
  onInputChange: (value: string) => void;
}

function Selector({ onInputChange }: SelectorType) {
  const [listOpened, setListOpened] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(CARD_PROVIDER_DEFAULT);
  const handleListOpened = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    setListOpened((prevState) => !prevState);
    if (e.target.nodeName !== 'DIV') {
      const provider = e.target.innerText;
      setSelectedProvider(provider);
      onInputChange(provider);
    }
  };

  useEffect(() => {
    if (listOpened) {
      setSelectedProvider(CARD_PROVIDER_DEFAULT);
    }
  }, [listOpened]);

  return (
    <div css={selectorContainer} onClick={(e) => handleListOpened(e)}>
      {selectedProvider}
      {listOpened && (
        <div>
          {CARD_PROVIDER_SELECT.map((provider, index) => (
            <li key={index}>{provider}</li>
          ))}
        </div>
      )}
    </div>
  );
}

export default Selector;
