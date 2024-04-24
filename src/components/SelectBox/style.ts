import styled from "styled-components";

const SelectWrapper = styled.div`
  width: 100%;
  font-size: 11px;
`;

const Option = styled.div`
  padding: 8px;
  height: 31px;
  width: 100%;
`;

const SelectedOptionBox = styled.div<{ selected: boolean; $isOpen: boolean }>`
  height: 31px;
  width: 100%;
  padding: 8px;
  border: 1px solid
    ${({ theme, $isOpen }) => ($isOpen ? "black" : theme.COLOR["grey-2"])};
  border-radius: 3px;
  display: flex;
  align-items: center;
  color: ${({ theme, selected }) =>
    selected ? "black" : theme.COLOR["grey-2"]};
  justify-content: space-between;
`;

const OptionsWrapper = styled.div`
  margin-top: 3px;
  z-index: 10;
  border: 1px solid ${({ theme }) => theme.COLOR["grey-2"]};
  border-radius: 5px;
  position: relative !important;
  background-color: white;
`;

const S = {
  SelectWrapper,
  Option,
  SelectedOptionBox,
  OptionsWrapper,
};

export default S;
