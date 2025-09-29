// import { useState } from 'react'
import './List.css'
import ListItem from './ListItem/ListItem'
import type { ListItemData } from '../App'
// import checkbox from './ListItem/ListItem'


type ListProps = {
  items: ListItemData[]
  removeItem: (id: number) => void
}




export default function List({ items, removeItem }: ListProps) {
  // const [isChecked, setIsChecked] = useState(false);
  
  // function checkingBox() {
  //   setIsChecked(!isChecked)
  //   return(isChecked)
  // }

 

  return (
    <div className='List'>
      
      {items.map(item => 
    
        <ListItem
          key={item.id}
          itemToDo={item.toDo}
          id={item.id}
          removeItem={removeItem}
          // itemDone={item.done}
          // itemDeleted={item.deleted}
        />
      )}

        {/* <button
        className = "deleteAllItems"
        onClick={() =>
          {for (let i: number = 0; i < items.length; i++) {
            removeItem(i)
            console.log(i)
          }}
        }
        >Delete All Checked Items</button> */}
    </div>
  );
}