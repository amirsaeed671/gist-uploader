import React, { forwardRef } from "react";
import Proptypes from "prop-types";

const TextInput = forwardRef(
  ({ placeholder, required, value, onChange, label, id }, ref) => {
    return (
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          ref={ref}
          id={id}
          type="text"
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
    );
  }
);

TextInput.propTypes = {
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  placeholder: Proptypes.string,
  required: Proptypes.bool,
  label: Proptypes.string,
  id: Proptypes.string,
};

TextInput.defaultProps = {
  placeholder: "",
  required: false,
  label: "",
  id: "",
};

export default TextInput;
