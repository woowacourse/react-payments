import { Children, cloneElement, isValidElement } from "react";
import styled from "styled-components";

interface InputGroupProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export function InputGroup(props: InputGroupProps) {
  const { children, asChild } = props;
  const childrenList = Children.toArray(children);

  return asChild ? (
    isValidElement(childrenList[0]) ? (
      cloneElement(childrenList[0], {})
    ) : (
      <></>
    )
  ) : (
    <GroupSection>{children}</GroupSection>
  );
}

const GroupSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4.5rem;

  ${({ theme }) => theme.fonts.body}

  background: ${({ theme }) => theme.colors.gray200};
  border-radius: 7px;
`;
