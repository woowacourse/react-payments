import styled from '@emotion/styled';

interface SelectProps {
  value?: string;
}

const SelectBase = styled.select<SelectProps>`
  width: 100%;
  font-size: 14px;
  border-radius: 3px;
  padding: 8px;
  border: 1px solid var(--color-border);
  background: no-repeat calc(100% - 8px) 50% url(${import.meta.env.BASE_URL}select_icon.svg);
  appearance: none;
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
    margin: 5px 0;
    padding: 0;
    border-radius: 3px;
  }

  & option {
    gap: 0;
    padding: 8px;
    font-size: 14px;
  }

  & option::checkmark {
    display: none;
  }

  &:focus {
    border-color: var(--color-black);
    background-image: url(${import.meta.env.BASE_URL}select_icon_focus.svg);
    outline: 0;
  }

  &[data-is-error='true'] {
    border-color: var(--color-error);
  }
`;

const Option = styled.option``;

const Select = Object.assign(SelectBase, { Option });

export default Select;
