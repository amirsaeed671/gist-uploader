import React from "react";
import PropTypes from "prop-types";
import Avatar from "./avatar";

function Gallery({ data }) {
  return data.length ? (
    <div className="h-auto bg-gray-100 flex p-4 mx-auto flex-col">
      <h1 className="font-semibold text-3xl m-2 p-4">List of All Gists</h1>
      {data.map(({ description, id, html_url, created_at, owner }) => (
        <div
          key={id}
          className="rounded-sm shadow-lg bg-pink-300 p-4 overflow-auto m-2"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{description}</div>
            <div className="flex">
              <Avatar image={owner.avatar_url} />
              <div className="flex flex-col ml-2">
                <div>{owner.login}</div>
                <a
                  href={owner.html_url}
                  target="__blank"
                  className="text-gray-800 text-base"
                >
                  {owner.html_url}
                </a>
              </div>
            </div>
            <span className="text-base font-bold"> Gist url :</span>
            <a
              href={html_url}
              target="__blank"
              className="text-gray-800 text-base"
            >
              {html_url}
            </a>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {created_at}
            </span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div />
  );
}

Gallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default Gallery;
