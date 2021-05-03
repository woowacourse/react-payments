import { useState, useLayoutEffect } from "react";
import classNames from "classnames/bind";
import styles from "./CardListPage.module.scss";
import { Link } from "react-router-dom";

import Label from "../../components/Label/Label";
import CardListContainer from "../../containers/CardListContainer/CardListContainer";
import AddBoxButton from "../../components/AddBoxButton/AddBoxButton";
import { ANIMATION, HEADER_TEXT, PAGE_PATH } from "../../constants";

const cx = classNames.bind(styles);

const CardListPage = ({ cardListState }) => {
  return (
    <div className={`${cx("card-list-page")} ${ANIMATION.FADE_IN}`}>
      <header className={cx("card-list-page__header")}>
        <Label labelText={HEADER_TEXT.OWNED_CARD} />
      </header>
      <main className={cx("card-list-page__main")}>
        <CardListContainer cardListState={cardListState} />
        <Link to={PAGE_PATH.ADD}>
          <AddBoxButton />
        </Link>
      </main>
    </div>
  );
};

export default CardListPage;
