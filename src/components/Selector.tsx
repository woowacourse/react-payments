import { css } from '@emotion/react';
import { MouseEvent, useState } from 'react';
import { CARD_PROVIDER_SELECT, CARD_PROVIDER_DEFAULT } from '../constants/cardInformation';
import ErrorMessage from './ErrorMessage';

const selectorContainerStyle = css({
  width: '100%',
  position: 'relative',
});

const selectorBoxStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '31px',
  border: '1px solid #ACACAC',
  borderRadius: '2.6px',
  padding: '8px',
  boxSizing: 'border-box',
  fontSize: '10px',
  lineHeight: '10px',
  justifyContent: 'center',
});

const listContainerStyle = css({
  backgroundColor: '#FFFFFF',
  border: '1px solid #ACACAC',
  width: '100%',
  boxSizing: 'border-box',
  position: 'absolute',
  top: '35px',
  borderRadius: '5px',
});

const listItemStyle = css({
  padding: '8px 10px',
  fontSize: '10px',
});

interface SelectorType {
  onInputChange: (value: string) => void;
  isError: boolean[];
  errorMessage: string;
}

function Selector({ onInputChange, isError, errorMessage }: SelectorType) {
  const [listOpened, setListOpened] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(CARD_PROVIDER_DEFAULT);
  const handleListOpened = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    setListOpened((prevState) => !prevState);
    const target = e.target as HTMLDivElement;

    if (target.id !== 'selected') {
      const provider = target.innerText;
      setSelectedProvider(provider);
      onInputChange(provider);
    }
  };

  return (
    <div css={selectorContainerStyle} onClick={(e) => handleListOpened(e)}>
      <div css={selectorBoxStyle} id="selected">
        {selectedProvider}
      </div>
      {listOpened && (
        <div css={listContainerStyle}>
          {CARD_PROVIDER_SELECT.map((provider, index) => (
            <div css={listItemStyle} key={index}>
              {provider}
            </div>
          ))}
        </div>
      )}
      {isError && <ErrorMessage value={errorMessage} />}
    </div>
  );
}

export default Selector;
