import styled from 'styled-components';

export const StyledDropdown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

export const StyledSelect = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;

  height: 3.2rem;
  padding: 0.8rem;
  border: 0.1rem solid
    ${(props) => (props.$isOpen ? props.theme.color.black : props.theme.color.lightGray)};
  border-radius: 0.2rem;
  ${(props) => props.theme.typography.dropDown};

  cursor: pointer;
`;

export const StyledSelectText = styled.div<{ $selected: string }>`
  color: ${(props) => (props.$selected ? props.theme.color.black : props.theme.color.lightGray)};
`;

export const StyledSelectImage = styled.div<{ $isOpen: boolean }>`
  color: ${(props) => (props.$isOpen ? props.theme.color.black : props.theme.color.lightGray)};
`;

export const StyledOptions = styled.ul`
  width: 100%;
  border: 0.1rem solid ${(props) => props.theme.color.lightGray};
  border-radius: 0.2rem;
`;

export const StyledOption = styled.li`
  height: 3.1rem;
  padding: 0.8rem;

  ${(props) => props.theme.typography.dropDown};
  color: ${(props) => props.theme.color.lightGray};

  cursor: pointer;
`;
