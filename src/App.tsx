import { useState } from "react";
import "./App.css";
import AddFriendForm from "./Components/AddFriendForm";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";
import FriendsList from "./Components/FriendsList";
import { FriendDataType } from "./Types/friendDataType";
import { initialFriends } from "./Data/Data";
function App() {
  const [friends, setFriends] = useState<FriendDataType[]>(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendDataType | null>(
    null
  );

  const handleAddFriend = (friend: FriendDataType) => {
    setFriends((prevFriends) => [...prevFriends, friend]);
    setShowAddFriend(false);
  };

  const handleShowAddFriend = () => {
    setShowAddFriend((prevState) => !prevState);
  };

  const handleSelection = (friend: FriendDataType) => {
    setSelectedFriend(friend);
  };
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList Friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend}/>
          {showAddFriend && <AddFriendForm onAddFriend={handleAddFriend} />}
          <Button onClick={handleShowAddFriend}>
            {!showAddFriend ? "Add Friend" : "Close"}
          </Button>{" "}
        </div>
        {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
      </div>
    </>
  );
}

export default App;
