import GlobalStyle from "../../styles/GlobalStyle";
import { emptyArrowFuction } from "../../util/initialValue";
import CardOwnerNameInput from "./CardOwnerNameInput";

export default {
  title: "CardOwnerNameInput",
  component: CardOwnerNameInput,
};

export const Default = () => (
  <>
    <GlobalStyle />
    <CardOwnerNameInput ownerName="" nameLength={0} setOwnerName={emptyArrowFuction}></CardOwnerNameInput>
  </>
);
