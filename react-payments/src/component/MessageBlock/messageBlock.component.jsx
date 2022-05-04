import "./messageBlock.css";

const MessageBlock = ({ children, messageClass }) => {
  return <div className={`${messageClass} message-container`}>{children}</div>;
};

export default MessageBlock;
