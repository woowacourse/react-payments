import "./index.scss";

interface ConfirmCardControlProps {
  closeModal: () => void;
  removeCard: () => void;
}

const ConfirmCardControl = ({
  closeModal,
  removeCard,
}: ConfirmCardControlProps) => {
  return (
    <div className="confirm-card-control">
      <div className="button-container">
        <button
          className="confirm-card-control-remove--btn"
          onClick={removeCard}
        >
          삭제
        </button>
      </div>
      <div className="button-container" onClick={closeModal}>
        <button>취소</button>
      </div>
    </div>
  );
};

export default ConfirmCardControl;
