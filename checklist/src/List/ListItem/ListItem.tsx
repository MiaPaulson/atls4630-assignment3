import './ListItem.css'

type ListItemProps = {
  itemToDo: string;
  itemDone: boolean;
  itemDeleted: boolean;
}

export default function ListItem({ itemToDo, itemDone, itemDeleted }: ListItemProps) {
  return (

    <div className='ListItem'>
        
        <button
          className='checkbox'
        ></button>

        <span>{itemToDo}</span>
        <span>{`done?: ${itemDone}`}</span>
        <span>{`deleted?: ${itemDeleted}`}</span>

        <button
          className='deleteListItem'
        >Delete</button>
        
      </div>

  )
}