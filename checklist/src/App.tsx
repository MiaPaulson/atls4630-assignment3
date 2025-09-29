import { useState } from 'react'
import './App.css'
//import AddItem from './AddItem/AddItem'
import List from './List/List'


export type ListItemData = {
  toDo: string
  id: number
  // done: boolean
  // deleted: boolean
}

// const listItems: ListItemData[] = [
//   {
//     toDo: "ATLS 4630 Assign 3",
//     id: 1
//     // done: false,
//     // deleted: false
//   },
//   {
//     toDo: "ENLP 3100 Reading",
//     id: 2
//     // done: true,
//     // deleted: false
//   },
//   {
//     toDo: "WORK Color Sheet",
//     id: 3
//     // done: false,
//     // deleted: false
//   }
// ]



export default function App() {
  
  // const [addIsOpen, setAddIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState("");
  const [itemsInList, setItemsInList] = useState<ListItemData[]>([])
  // let newItem: ListItemData[] = []

  function addItemToList(inputValue: string) {
    // if the value isn't empty, add it to the list and make it empty
    if (inputValue !== "") {
      // setItemsInList([...itemsInList, { toDo: item, done: false, deleted: false}])

      // if there are things in the list, find the length, find the new length with the new item, and have that be the ID
      // otherwise, have the ID be 0
      const newId = itemsInList.length > 0 ? Math.max(...itemsInList.map(item => item.id)) + 1 : 0
      setItemsInList([...itemsInList, { toDo: inputValue, id: newId}]);


      // setItemsInList([...itemsInList, { toDo: item }])
      console.log({inputValue})
      console.log({newId})
      console.log({itemsInList})
      setInputValue("")
    } else {
      console.log("input empty")
    }

  }

  function removeItem(id: number) {
    setItemsInList(itemsInList.filter(item => item.id !== id))
  }


  return (
    <div className="app">
      <header>
        <h1>To-Do List</h1>
        <input
        className="itemAdding"
        value= {inputValue}
        // below from chatGPT : the e is the event, the "target" is the element that triggered the event (input)
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add New Task">
        </input>
        <button
        className = "newItemButton"
        onClick={() => addItemToList(inputValue)}
        >+</button>

        {/* if the addisOpen is true, then show the input for AddItem! */}
        {/* {addIsOpen && (
          <AddItem 
            // items={itemsInList}
            // removeItem={removeItem}
            // addItemToList={addItemToList}
          />
        )} */}

      </header>


      <List
        items={itemsInList.map(item => {
          return {
            toDo: item.toDo,
            id: item.id,
            // done: item.done,
            // deleted: item.deleted
            
          }
        })}

        
        removeItem={removeItem}

      />

    </div>
  )
}