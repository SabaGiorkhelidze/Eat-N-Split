import React from 'react'
import Button from './Button'

const FormSplitBill = () => {
  return (
    <form className='form-split-bill'>
        <h2>Split a bill with X</h2>

        <label htmlFor="">Bill Value</label>
        <input type="text" name="" id="" />

        <label htmlFor="">Your Expense</label>
        <input type="text" name="" id="" />

        <label htmlFor="">X Expense</label>
        <input type="text" name="" id="" disabled/>

        <label htmlFor="">Who is paying the bill</label>
        <select name="" id="">
            <option value="user">You</option>
            <option value="friend">X</option>
        </select>


        <Button onClick={() => true}>Add</Button>
    </form>
  )
}

export default FormSplitBill