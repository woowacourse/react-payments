const Radio = ({ name, value, checked, onChange, children }) => {
  return (
    <label className="radio">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

export default Radio;
