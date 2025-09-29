import { useState } from 'react'
import './ListItem.css'

type ListItemProps = {
  itemToDo: string
  id: number
  removeItem: (id: number) => void
  // itemDone: boolean;
  // itemDeleted: boolean;
}

//export default function ListItem({ itemToDo, itemDone, itemDeleted }: ListItemProps) {
export default function ListItem({ itemToDo, id, removeItem }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(false);


  return (

    <div className='ListItem'>
        
        <button
          className='checkbox'
          onClick={() => setIsChecked(!isChecked)}
          style= {{backgroundColor: isChecked ? "rgb(77, 209, 108)" : "white"}}
        ></button>

        <span>{itemToDo}</span>
        {/* <span>{`done?: ${itemDone}`}</span>
        <span>{`deleted?: ${itemDeleted}`}</span> */}

        <button
          className='deleteListItem'
          onClick={() => removeItem(id)}
        >Delete</button>
        
      </div>

  )
}