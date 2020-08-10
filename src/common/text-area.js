import React from "react";
import Proptypes from "prop-types";

/**
 * Component for the custom text-area
 *
 * @function TextArea
 * @param {string} [id=''] id of the textarea element.
 * @param {string} [label='']  textarea label (Optional).
 * @param {string} [placeholder='']  placeholder for the field (Optional).
 * @param {boolean} [required=false]  text area field required or not. default to false.
 * @param {string} value  text area value
 * @param {function} onChange  callback which fires on textarea change.
 * @return {ReactElement}  Customized Textarea component.
 */
function TextArea({ label, id, value, onChange, placeholder, required }) {
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {label}
      <textarea
        className="shadow h-64 resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}

TextArea.propTypes = {
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  id: Proptypes.string,
  label: Proptypes.string,
  placeholder: Proptypes.string,
  required: Proptypes.bool,
};

TextArea.defaultProps = {
  id: "",
  label: "",
  placeholder: "",
  required: false,
};

export default TextArea;
