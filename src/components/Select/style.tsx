import styled from 'styled-components';

export const Select = styled.div<{ $isActive: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 100%;
  height: 3.2rem;
  padding: 0.8rem;

  border-radius: 0.3rem;
  border: 0.1rem solid
    ${(props) => (props.$isActive ? props.theme.color.black : props.theme.color.lightGray)};
  color: ${(props) => props.theme.color.black};
  ${(props) => props.theme.typography.input};

  cursor: pointer;
`;

export const CurrentSelected = styled.div<{ $unSelected: boolean }>`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  z-index: 1;
  color: ${(props) => (props.$unSelected ? props.theme.color.lightGray : props.theme.color.black)};
`;

export const Options = styled.ul<{ $isShow: boolean }>`
  display: ${(props) => (props.$isShow ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 3.5rem;
  left: 0;
  z-index: 2;

  border: 0.1rem solid ${(props) => props.theme.color.lightGray};
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.color.white};
`;

export const Option = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding-left: 1rem;

  &:hover {
    background-color: ${(props) => props.theme.color.lightGray};
  }
`;
