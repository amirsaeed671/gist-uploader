import React from "react";
import PropTypes from "prop-types";

function Avatar({ image }) {
  return (
    <div className="w-16 h-16 relative mb-4">
      <div className="group w-full h-full rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
        <span className="hidden group-hover:table-cell text-white font-bold align-middle">
          KR
        </span>
        <img
          src={image}
          alt="owner"
          className="object-cover object-center w-full h-full visible group-hover:hidden"
        />
      </div>
    </div>
  );
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Avatar;
