import './App.css'
import AddItem from './AddItem/AddItem'
import List from './List/List'


export type ListItemData = {
  toDo: string
  done: boolean
  deleted: boolean
}

const listItems: ListItemData[] = [
  {
    toDo: "ATLS 4630 Assign 3",
    done: false,
    deleted: false
  },
  {
    toDo: "ENLP 3100 Reading",
    done: true,
    deleted: false
  },
  {
    toDo: "WORK Color Sheet",
    done: false,
    deleted: false
  }
]

export default function App() {

  return (
    <div className="app">
      <header>
        <h1>To-Do List</h1>
        <button
        className = "newItemButton"
        >+</button>
      <AddItem />

      </header>


      <List
        items={listItems.map(item => {
          return {
            toDo: item.toDo,
            done: item.done,
            deleted: item.deleted
          };
        })}
      />

    </div>
  )
}