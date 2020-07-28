import { useState } from "react";

function useForm() {
  const [description, setDescription] = useState("");
  const [ext, setExt] = useState("");
  const [content, setContent] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const functionMapping = {
    description: setDescription,
    ext: setExt,
    content: setContent,
    isPublic: setIsPublic,
  };

  const setFormValue = (obj) => {
    const entries = Object.keys(obj);
    const firstEntry = entries[0];
    functionMapping[firstEntry](obj[firstEntry]);
  };

  const resetForm = () => {
    setDescription("");
    setExt("");
    setContent("");
    setIsPublic(true);
  };

  return [description, ext, content, isPublic, setFormValue, resetForm];
}

export default useForm;
