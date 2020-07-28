import React, { useRef, useEffect } from "react";
import Proptypes from "prop-types";
import useForm from "custom-hooks/useForm";
import TextInput from "common/text-input";
import FormHeader from "common/form-header";
import Checkbox from "common/checkbox";

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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="content"
          >
            Content/Code
            <textarea
              className="shadow h-64 resize-none appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="content"
              required
              value={content}
              onChange={(e) => setFormValue({ content: e.target.value })}
              type="text"
              placeholder="Write you content/code here"
            />
          </label>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={loader}
            type="submit"
          >
            Create Gist
          </button>
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
