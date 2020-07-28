import React from "react";
import PropTypes from "prop-types";

function Container({ children }) {
  return <div className="container mx-auto px-2">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
