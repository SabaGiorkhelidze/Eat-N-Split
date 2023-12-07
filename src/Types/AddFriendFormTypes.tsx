import { FriendDataType } from "./friendDataType";

export interface addFriendFormPropType {
  onAddFriend: (newFriend: FriendDataType) => void;
}
