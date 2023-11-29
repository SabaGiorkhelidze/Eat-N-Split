import React, { useState } from "react";
import Button from "./Button";

const AddFriendForm = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  };

  return (
    <>
      <form action="" className="form-add-friend" onSubmit={handleFormSubmit}>
        <label htmlFor="">Friend Name</label>
        <input
          type="text"
          name=""
          value={name}
          id=""
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="">Image URL</label>
        <input
          type="text"
          name=""
          id=""
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button onClick={() => true}>Add</Button>
      </form>
    </>
  );
};

export default AddFriendForm;
