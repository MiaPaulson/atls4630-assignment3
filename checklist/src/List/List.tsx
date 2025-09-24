import './List.css'
import ListItem from './ListItem/ListItem'
import type { ListItemData } from '../App'


type ListProps = {
  items: ListItemData[];
};

export default function List({ items }: ListProps) {
  return (
    <div className='List'>
      {items.map(item => 
        <ListItem
          key={item.toDo}
          itemToDo={item.toDo}
          itemDone={item.done}
          itemDeleted={item.deleted}
        />
      )}

        <button
        className = "deleteAllCheckedItems"
        >Delete All Checked Items</button>
    </div>
  );
}