import styled from '@emotion/styled';

interface SelectProps {
  value?: string;
}

const SelectBase = styled.select<SelectProps>`
  width: 100%;
  font-size: 13px;
  border-radius: 2px;
  padding: 8px 6px;
  border: 1px solid var(--color-border);
  background: no-repeat calc(100% - 8px) 50% url(${import.meta.env.BASE_URL}select_icon.svg);
  appearance: none;
  color: ${(props) => (props.value?.length ? 'var(--color-black)' : 'var(--color-description)')};

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
