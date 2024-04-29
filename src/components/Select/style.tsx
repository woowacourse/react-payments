import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 3.2rem;

  border-radius: 0.3rem;
  border: 0.1rem solid ${(props) => props.theme.color.lightGray};

  cursor: pointer;
`;

export const Select = styled.select<{ $isPlaceholder: boolean }>`
  width: 100%;
  height: 100%;
  background: transparent;
  border: 0 none;
  padding: 0 1rem;
  position: relative;
  z-index: 3;

  &::-ms-expand {
    display: none;
  }

  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;

  color: ${(props) =>
    props.$isPlaceholder ? props.theme.color.lightGray : props.theme.color.black};
  ${(props) => props.theme.typography.input};
`;

export const Indicator = styled.div`
  position: absolute;
  top: 25%;
  right: 1rem;
`;

export const Option = styled.option`
  color: ${(props) => props.theme.color.black};
  ${(props) => props.theme.typography.input};
`;
