import { FriendDataType } from "../Types/friendDataType";
import Button from "./Button";
interface FormSplitBillPropTypes {
  selectedFriend: FriendDataType;
}
const FormSplitBill = ({ selectedFriend }: FormSplitBillPropTypes) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="">Bill Value</label>
      <input type="text" name="" id="" />

      <label htmlFor="">Your Expense</label>
      <input type="text" name="" id="" />

      <label htmlFor="">{selectedFriend.name} Expense</label>
      <input type="text" name="" id="" disabled />

      <label htmlFor="">Who is paying the bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onClick={() => true}>Add</Button>
    </form>
  );
};

export default FormSplitBill;
