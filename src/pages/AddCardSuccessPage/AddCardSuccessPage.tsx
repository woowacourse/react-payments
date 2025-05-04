import React from "react";
import Group54 from "/Group-54.svg";
import styles from "./AddCardSuccessPage.module.css";
import CheckButton from "../../components/CheckButton/CheckButton";
import { useLocation, useNavigate } from "react-router";

interface CardState {
  cardNumbers: string[];
  selectedCompany: {
    value: string;
    label: string;
    color: string;
  };
}

const AddCardSuccessPage: React.FC = () => {
  const navigate = useNavigate();
  const { cardNumbers = [], selectedCompany } =
    (useLocation().state as CardState) || {};

  const firstCardNumber = cardNumbers[0] ?? "";
  const companyName = selectedCompany?.label ?? "";

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.AddCardSuccessPage}>
      <img className={styles.img} src={Group54} alt="등록 완료 아이콘" />
      <h1 className={styles.description}>
        {firstCardNumber}로 시작하는 <br />
        {companyName}가 등록되었어요.
      </h1>
      <CheckButton
        className={styles["check-button"]}
        onSubmit={handleButtonClick}
        text="확인"
      />
    </div>
  );
};

export default AddCardSuccessPage;
