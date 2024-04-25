import styles from "./CardAddedPage.module.css";
import GoMainButton from "../../components/\bButton/GoMainButton";
import { useNavigate, useLocation } from "react-router-dom";

export default function CardAddedPage() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <div>{location.state.firstFourCardNumber}</div>
      <GoMainButton onClick={() => navigate("/")}></GoMainButton>
    </div>
  );
}
