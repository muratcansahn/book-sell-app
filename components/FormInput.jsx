import { useState } from "react";
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="formInput flex flex-col">
      {/* <label>Username</label> */}
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight peer"
        {...inputProps}
        onChange={onChange}
        required
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span className="text-red-500 text-xs hidden italic my-1">
        {errorMessage}{" "}
      </span>
    </div>
  );
};

export default FormInput;
