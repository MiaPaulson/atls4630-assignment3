import { useState } from 'react'
import './AddItem.css'
import type { ListItemData } from '../App'
//import addItemToList from '../App'

type addProps = {
  // items: ListItemData[]
  // removeItem: (id: number) => void
  addItemToList: (item: ListItemData) => void
}

export default function AddItem({ addItemToList }: addProps) {
  const [inputValue, setInputValue] = useState("");
  // const [itemsInList, setItemsInList] = useState<ListItemData[]>([])
  // let newItem: ListItemData[] = []

  // do this following function when "enter" is clicked for the input
  // function addItemToList(item: string) {
  //   // if the value isn't empty, add it to the list and make it empty
  //   if (inputValue !== "") {
  //     //setItemsInList([...itemsInList, { toDo: item, done: false, deleted: false}])
  //     setItemsInList([...itemsInList, { toDo: item }])
  //     console.log({inputValue})
  //     console.log({itemsInList})
  //     setInputValue("")
  //   } else {
  //     console.log("input empty")
  //   }
    
  // }


  //   return (
  //   <div className="addItem">
  //       <input
  //       className="itemAdding"
  //       value= {inputValue}
  //       // below from chatGPT : the e is the event, the "target" is the element that triggered the event (input)
  //       onChange={(e) => setInputValue(e.target.value)}
  //       placeholder="Add New Task">
  //       </input>
  //       {/* <button
  //       className = "addInput"
  //       onClick={() => addItemtoList(inputValue)}
  //       >+</button> */}
  //       <button
  //       className = "addInput"
  //       onClick={() => addItemToList(inputValue)}
  //       >add input</button>

  //       {items.map(item =>
  //       <AddItem
  //         key={item.id}
  //         toDo={item.toDo}
  //         id={item.id}
  //         removeItem={removeItem}
  //       />  
  //       )}

  //   </div>
  // )

  return (
    <div className="addItem">
        <input
        className="itemAdding"
        value= {inputValue}
        // below from chatGPT : the e is the event, the "target" is the element that triggered the event (input)
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add New Task">
        </input>
        <button
        className = "addInput"
        onClick={() => addItemToList(inputValue)}
        >add input</button>

        {items.map(item =>
        <AddItem
          key={item.id}
          toDo={item.toDo}
          id={item.id}
          removeItem={removeItem}
        />  
        )}

    </div>
  )
}