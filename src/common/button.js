import React from "react";
import Proptypes from "prop-types";

function Button({ disabled, label }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      disabled={disabled}
      type="submit"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: Proptypes.string.isRequired,
  disabled: Proptypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
