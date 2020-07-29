import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Iframe = forwardRef(({ id, srcDoc }, ref) => {
  return <iframe srcDoc={srcDoc} title={id} ref={ref} />;
});

Iframe.propTypes = {
  id: PropTypes.string,
  srcDoc: PropTypes.string,
};

Iframe.defaultProps = {
  id: "",
  srcDoc: "",
};

export default Iframe;
