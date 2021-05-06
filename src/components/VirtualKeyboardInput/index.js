import "./style.css";
import Input from "../Input";

const VirtualKeyboardInput = ({ isCenter, value }) => {
  return (
    <div className="virtual-keyboard-input" tabIndex="0">
      <Input
        type="password"
        isCenter={isCenter}
        value={value}
        disabled="true"
        required
      />
    </div>
  );
};

export default VirtualKeyboardInput;
