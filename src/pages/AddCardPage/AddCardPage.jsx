import classNames from "classnames/bind";
import styles from "./AddCardPage.module.scss";
import { Link } from 'react-router-dom';

import { PAGE_PATH, HEADER_TEXT } from '../../constants';

import NavigationButton from "../../components/NavigationButton/NavigationButton"
import Card from "../../components/Card/Card"
import CardInputContainer from "../../containers/CardInputContainer/CardInputContainer"

const cx = classNames.bind(styles);

const cardMockUp = {
  cardName: "",
  backgroundColor: "#D2D2D2",
  cardNumberList: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  cardOwner: "NAME",
  cardExpiration: "MM/YY",
}

const AddCardPage = ({}) => {
  return (
    <div className={cx("add-card-page")}>
      <header className={cx("add-card-page__header")}>
        <Link to={PAGE_PATH.ROOT}>
          <NavigationButton buttonText={HEADER_TEXT.ADD_CARD} />
        </Link>
      </header>
      <main className={cx("add-card-page__main")}>
        <Card className={cx("add-card-page__card")} {...cardMockUp}/>
        <CardInputContainer />
      </main>
    </div>
  );
};

export default AddCardPage;
