import { useEffect, useState } from "react";
import "./App.css";
import AddFriendForm from "./Components/AddFriendForm";
import Button from "./Components/Button";
import FormSplitBill from "./Components/FormSplitBill";
import FriendsList from "./Components/FriendsList";
function App() {
  const [showAddFriend, setShowAddFriend] = useState<boolean>(false);
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendsList />
          {showAddFriend && <AddFriendForm />}
          <Button onClick={() => setShowAddFriend(!showAddFriend)}>
            {!showAddFriend ? "Add Friend" : "Close"}
          </Button>{" "}
          {/*  ?  : "Close" */}
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}

export default App;
