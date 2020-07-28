import React from "react";
import PropTypes from "prop-types";

function Checkbox({ onChange, label, id, checked }) {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      <input
        className="mr-1"
        id={id}
        onChange={onChange}
        type="checkbox"
        checked={checked}
      />
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.func.isRequired,
  id: PropTypes.string,
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  id: "",
  label: "",
};

export default Checkbox;
