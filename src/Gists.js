import React, { useState, useEffect } from "react";
import postGist from "observables/form";
import { Redirect } from "react-router-dom";
import Form from "./Form";

function Gists() {
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

  return <Form onSubmit={handleSubmit} loader={loader} />;
}

export default Gists;
