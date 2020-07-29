import React from "react";
import PropTypes from "prop-types";
import api from "utils/api";
import Iframe from "./iframe";

function GistList({ data }) {
  const dummy = async (el, url) => {
    const html = await api(`https://cors-anywhere.herokuapp.com/${url}`);
    el.srcdoc = html;
  };

  return data.map(({ id, html_url }) => (
    <Iframe
      ref={(el) => {
        dummy(el, html_url);
      }}
      title={id}
      key={id}
    />
  ));
}

GistList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default GistList;
