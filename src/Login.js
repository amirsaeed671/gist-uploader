import React, { useState, useRef, useEffect } from "react";
import githubIcon from "assets/GitHub-Mark-32px.png";
import { useHistory } from "react-router-dom";

function Login() {
  const [token, setToken] = useState("");
  const history = useHistory();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("token", token);
    history.push("/gists");
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-screen justify-center items-center"
      >
        <input
          className="shadow appearance-none border rounded w-full md:w-8/12 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="description"
          required
          ref={inputRef}
          value={token}
          onChange={(e) => setToken(e.target.value)}
          type="text"
          placeholder="Your github access token with at least permission for creating a gist"
        />
        <button
          type="submit"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <img src={githubIcon} alt="github-icon" />
          <span className="mr-2 ml-3">Login</span>
        </button>
      </form>
    </div>
  );
}

export default Login;
