import styled from '@emotion/styled';

const SelectBase = styled.select`
  width: 100%;
  font-size: 13px;
  border-radius: 2px;
  padding: 8px 6px;
  border: 1px solid var(--color-border);

  &:focus {
    border-color: var(--color-black);
    outline: 0;
  }

  &[data-is-error='true'] {
    border-color: var(--color-error);
  }
`;

const Option = styled.option``;

const Select = Object.assign(SelectBase, { Option });

export default Select;
