import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_LINK_MUTATION } from "../mutations";

export const CreateLink = () => {
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      url,
      description,
    },
  });

  const onFormSubmit = (e) => {
    e.preventDefault();
    createLink();
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onUrlChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={description}
            onChange={onDescriptionChange}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={onUrlChange}
            type="text"
            placeholder="The URL for the link"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
