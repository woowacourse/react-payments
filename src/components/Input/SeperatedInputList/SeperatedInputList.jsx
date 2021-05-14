import classNames from "classnames/bind";
import styles from "./SeperatedInputList.module.scss";
import Input from "../Input.jsx";

const cx = classNames.bind(styles);

const SeperatedInputList = ({
  labelText,
  className,
  onInputChange,
  maxInputLength = 4,
  seperator,
  passwordInputCount = 0,
  inputNames = [],
}) => {
  const InputList = inputNames.map((inputName, index) => (
    <>
      <Input
        key={inputName}
        name={inputName}
        type={index <= inputNames.length - passwordInputCount - 1 ? "text" : "password"}
        className={cx("seperated-input-list__input")}
        maxLength={maxInputLength}
        onChange={onInputChange}
        required
      />
      {index !== inputNames.length - 1 && (
        <span className={cx("seperated-input-list__input-separator")}>{seperator}</span>
      )}
    </>
  ));

  return (
    <div className={`${cx("seperated-input-list")} ${className}`}>
      {!!labelText?.length && (
        <label className={cx("seperated-input-list__label")} name={labelText}>
          {labelText}
        </label>
      )}
      <div className={cx("seperated-input-list__input-wrapper")}>{InputList}</div>
    </div>
  );
};

export default SeperatedInputList;
