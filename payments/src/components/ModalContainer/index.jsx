import "./index.scss";

const ModalContainer = ({ children, contentsRef, visible, setVisible }) => {
  const closeModal = (e) => {
    if (e.target === contentsRef.current) {
      return;
    }
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="deemer" onClick={closeModal}>
          <div className="modal--contents">{children}</div>
        </div>
      )}
    </>
  );
};

export default ModalContainer;
