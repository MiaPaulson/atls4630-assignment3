# atls4630-assignment3
Thinking in React

<img width="282" height="385" alt="mockup" src="https://github.com/user-attachments/assets/140a8182-cab2-4e0a-b9d7-c80580cca17d" />

Above is my simple mock-up for my check list app. The following features will be present in the working app: adding a new item to the to-do list, marking items as done, deleting existing items individually, and clearing all checked items.

<img width="565.33" height="305" alt="hierarchy" src="https://github.com/user-attachments/assets/078c7ebb-5831-42f6-b54e-48e209063b29" />

My UI components are separated as follows:
1. App (purple) - contains entire app
2. AddItem (pink) - opens up an input bar for the user to input new items for checklist
3. List (blue) - contains all items user has added to list AND a clear all checked items section
4. ListItem (red) - contains a checkbox and delete button for all items in list


My states are:
1. Is the "add item" open? - boolean state (true: show the input bar)
2. Add items to checklist - with ListItemData
3. Is the item "checked"? - boolean state (true: can be deleted by "clear all checked items")
Deleting the "checked" items is not a state since the "is checked" can be passed down from a parent and deleted from there.

My states will live at (color coded and next to their branches):
<img width="328" height="268.33" alt="image" src="https://github.com/user-attachments/assets/1324a33b-1bb5-49c0-a58b-3d1e6a27497e" />
