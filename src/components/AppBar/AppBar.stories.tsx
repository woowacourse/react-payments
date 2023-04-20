import { Link } from "react-router-dom";
import GlobalStyle from "../../styles/GlobalStyle";
import AppBar from "./AppBar";

export default {
  title: "AppBar",
  component: AppBar,
};

export const CardListPage = () => (
  <>
    <GlobalStyle />
    <AppBar title="보유카드"></AppBar>
  </>
);

export const AddCardPage = () => (
  <>
    <GlobalStyle />
    <AppBar title="카드추가" leftChild={<Link to="/">〈</Link>}></AppBar>
  </>
);
