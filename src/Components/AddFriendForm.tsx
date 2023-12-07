import React, { useState } from "react";
import Button from "./Button";
import { FriendDataType } from "../Types/friendDataType";
import { addFriendFormPropType } from "../Types/AddFriendFormTypes";

const AddFriendForm = ({ onAddFriend }: addFriendFormPropType) => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("https://i.pravatar.cc/48");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend: FriendDataType = {
      name,
      id,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
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
