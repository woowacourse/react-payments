import styled from "styled-components";
import { ADD_CARD_ITEM_BG_COLOR } from "style";

const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 130px;
  padding: 16px;
  background-color: ${ADD_CARD_ITEM_BG_COLOR};
  border-radius: 5px;
  margin: 10px 0 0;
  cursor: pointer;

  &:hover {
    background-color: ${ADD_CARD_ITEM_BG_COLOR}cc;
  }
`;

export { CardBox };
