import LinkButton from "../LinkButton/linkButton.component";
import PageTitle from "../PageTitle/pageTitle.component";
import "./Header.css";

const Header = (props) => {
  return (
    <div className="header">
      <LinkButton {...props} />
      <PageTitle {...props} />
    </div>
  );
};

export default Header;
