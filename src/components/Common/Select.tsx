import { type SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';

interface SelectProps {
  value?: string;
  style?: never;
  customStyle?: SerializedStyles;
}

const SelectBase = styled.select<SelectProps>`
  width: 100%;
  font-size: var(--font-size-m);
  border-radius: var(--radius-s);
  padding: var(--spacing-8);
  border: 1px solid var(--color-border);
  background: no-repeat calc(100% - var(--spacing-8)) 50% url(${import.meta.env.BASE_URL}select_icon.svg);
  appearance: none;
  /* stylelint-disable-next-line scale-unlimited/declaration-strict-value */
  color: ${(props) => (props.value?.length ? 'var(--color-black)' : 'var(--color-description)')};

  &,
  &::picker(select) {
    appearance: base-select;
  }

  &::picker-icon {
    content: '';
  }

  &:open::picker(select) {
    display: flex;
    flex-direction: column;
    border-color: var(--color-border);
    margin: var(--spacing-4) 0;
    padding: 0;
    border-radius: var(--radius-s);
  }

  &:focus {
    border-color: var(--color-black);
    background-image: url(${import.meta.env.BASE_URL}select_icon_focus.svg);
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-gray-100);
    color: var(--color-gray-500);
    border-color: var(--color-gray-300);
  }

  &[data-is-error='true'] {
    border-color: var(--color-error);
  }

  & option {
    gap: 0;
    padding: var(--spacing-8);
    font-size: var(--font-size-m);
  }

  & option::checkmark {
    display: none;
  }

  ${(props) => props.customStyle}
`;

const Option = styled.option``;

const Select = Object.assign(SelectBase, { Option });

export default Select;
