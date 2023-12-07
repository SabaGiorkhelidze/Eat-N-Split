import { FriendDataType } from "../Types/friendDataType";
import Friend from "./Friend";

interface FriendsListDataType {
  Friends: FriendDataType[];
  onSelection: (selectedFriend: FriendDataType) => void;
  selectedFriend: FriendDataType | null;
}

const FriendsList = ({ Friends, onSelection, selectedFriend }: FriendsListDataType) => {
  return (
    <>
      <ul>
        {Friends.map((friend: FriendDataType) => (
          <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend}/>
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
