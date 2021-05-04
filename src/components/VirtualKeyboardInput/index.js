import "./style.css";
import Input from "../Input";

const VirtualKeyboardInput = ({ isCenter, valueByState }) => {
  return (
    <div className="virtual-keyboard-input" tabIndex="0">
      <Input
        type="password"
        isCenter={isCenter}
        value={valueByState}
        disabled="true"
        required
      />
    </div>
  );
};

export default VirtualKeyboardInput;
