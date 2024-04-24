import styles from "./CardAddedPage.module.css";
import GoMainButton from "../../components/\bButton/GoMainButton";
import { useNavigate } from "react-router-dom";

export default function CardAddedPage() {
  const navigate = useNavigate();
  return (
    <div>
      <GoMainButton onClick={() => navigate("/")}></GoMainButton>
    </div>
  );
}
