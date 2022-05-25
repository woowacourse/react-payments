import styled from "styled-components";
import { ITEM_HOVER_PRIMARY_BG_COLOR, LABEL_PRIMARY_COLOR } from "style";

const CalendarContainer = styled.div``;

const SelectLayer = styled.div`
  display: ${(props) => (props.isShown ? "block" : "none")};
  width: 100%;
  margin: 16px;
`;

const SelectListWrapper = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  padding-left: 0;
`;

const Item = styled.li`
  text-align: center;
  margin: 8px 0;
  padding: 8px;
  width: 50%;
  box-shadow: 0 4px 8px -8px ${LABEL_PRIMARY_COLOR};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${ITEM_HOVER_PRIMARY_BG_COLOR};
  }
`;

export { CalendarContainer, SelectLayer, SelectListWrapper, List, Item };
