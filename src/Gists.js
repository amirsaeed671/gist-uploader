import React, { useState, useEffect } from "react";
import postGist from "observables/form";
import { Redirect } from "react-router-dom";
import useFetch from "custom-hooks/useFetch";
import GistList from "common/gist-iframe";
import Form from "./Form";

function Gists() {
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error] = useFetch();
  const [loader, setLoader] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const handleSubmit = (formData) => {
    setLoader(true);
    const observer = {
      next: () => {
        setLoader(false);
      },
      error: () => {
        setLoader(false);
      },
    };
    postGist(formData).subscribe(observer);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      setIsAuthenticated(false);
    }
  }, []);

  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      <Form onSubmit={handleSubmit} loader={loader} />
      <GistList data={data} />
    </div>
  );
}

export default Gists;
