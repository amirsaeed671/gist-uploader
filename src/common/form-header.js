import React from "react";
import Proptypes from "prop-types";

function FormHeader({ title }) {
  return (
    <div className="mb-4 -mt-2">
      <h1 className="text-3xl">{title}</h1>
    </div>
  );
}

FormHeader.propTypes = {
  title: Proptypes.string.isRequired,
};

export default FormHeader;
