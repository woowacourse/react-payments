import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardDataContext } from "../../provider/CardDataProvider";

const HomePage = () => {
  const { state } = useContext(CardDataContext);
  console.log(state);

  return <Link to="/add">추가</Link>;
};

export default HomePage;
