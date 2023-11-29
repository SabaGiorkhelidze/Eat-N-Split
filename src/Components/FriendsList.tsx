import { initialFriends } from "../Data/Data";
import { FriendDataType } from "../Types/friendDataType";
import Friend from "./Friend";

const FriendsList = () => {
  return (
    <>
      <ul>
        {initialFriends.map((friend: FriendDataType) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
