import React, { useState, useEffect, useContext } from "react";
import postGist from "observables/form";
import { Redirect } from "react-router-dom";
import useFetch from "custom-hooks/useFetch";
import Gallery from "common/gallery";
import Notification from "context-reducers/context";
import notify from "utils/notify";
import Form from "./Form";

function Gists() {
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error, refetch] = useFetch();
  const [loader, setLoader] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { dispatch } = useContext(Notification);
  const handleSubmit = (formData) => {
    setLoader(true);
    const observer = {
      next: () => {
        setLoader(false);
      },
      error: () => {
        setLoader(false);
        notify(dispatch, {
          success: false,
          primary: "Unable to Upload the Gist",
          secondary: "Please make sure you've filled the form correctly.",
        });
      },
      complete: () => {
        refetch();
        notify(dispatch, {
          success: true,
          primary: "Gist has been uploaded",
          secondary: "Thanks for using Gist uploader :)",
        });
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
      <Gallery data={data} />
    </div>
  );
}

export default Gists;
