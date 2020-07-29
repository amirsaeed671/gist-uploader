import React, { useRef, useEffect } from "react";
import Proptypes from "prop-types";
import useForm from "custom-hooks/useForm";
import TextInput from "common/text-input";
import FormHeader from "common/form-header";
import Checkbox from "common/checkbox";
import TextArea from "common/text-area";
import Button from "common/button";

function Form({ onSubmit, loader }) {
  const [
    description,
    ext,
    content,
    isPublic,
    setFormValue,
    resetForm,
  ] = useForm();
  const initRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ description, ext, content, isPublic });
    resetForm();
  };

  useEffect(() => {
    initRef.current.focus();
  }, []);

  return (
    <div className="w-full mt-4 max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <FormHeader title="Create a Gist" />
        <div className="mb-4">
          <TextInput
            ref={initRef}
            value={description}
            className="mb-3"
            required
            label="Description"
            id="description"
            onChange={(e) => setFormValue({ description: e.target.value })}
            placeholder="Enter the description for the gist"
          />
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0 w-full">
            <TextInput
              id="filename"
              label="Filename"
              value={ext}
              required
              onChange={(e) => setFormValue({ ext: e.target.value })}
              type="text"
              placeholder="e.g keymap.bson, config.json"
            />
          </div>
          <div className="md:w-1/2 px-3 mb-6 md:mb-0 flex items-end w-full">
            <Checkbox
              id="isPublic"
              onChange={(e) => setFormValue({ isPublic: e.target.checked })}
              label="Public"
              type="checkbox"
              checked={isPublic}
            />
          </div>
        </div>
        <div className="mb-6">
          <TextArea
            id="content"
            required
            label="Content/Code"
            value={content}
            onChange={(e) => setFormValue({ content: e.target.value })}
            type="text"
            placeholder="Write you content/code here"
          />
        </div>
        <div className="flex items-center justify-between">
          <Button disabled={loader} label="Create Gist" />
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  onSubmit: Proptypes.func.isRequired,
  loader: Proptypes.bool.isRequired,
};

export default Form;
