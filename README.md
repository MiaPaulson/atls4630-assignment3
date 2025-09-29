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
4. The input value??
Deleting the "checked" items is not a state since the "is checked" can be passed down from a parent and deleted from there.

My states will live at (color coded and next to their branches):
<img width="328" height="268.33" alt="image" src="https://github.com/user-attachments/assets/1324a33b-1bb5-49c0-a58b-3d1e6a27497e" />


After coding for hours (I mean HOURS) and not really getting anywhere to make it work, I decided to not have the plus button "show" the input bar but instead have that plus button be what adds the item. Therefore, "add item" won't be open, it'll be "done".

OMG I AM SO CONFUSED WHY IS NOTHING WORKING AFLJGALOFBLSDJRGAHEROGJ?!?!?!?!?!?!?!?!!? NOTHING WORKS AND I'VE BEEN DOING THIS FOR SO LONG MY EYES AND BRAIN HURT WHY MUST REACT DO THIS TO ME

....
Looking into it more, I don't think I need the "addItem" stuff. I think all of that can happen on the App one. Trying that??
....

Alright, so I'm going to redo literally everything from above. Excuse my freak out. Trust me, that was nothing compared to the actual hairpulling over here. But I do apologize to anyone reading.

<img width="226" height="300.33" alt="image" src="https://github.com/user-attachments/assets/eae340b8-e026-40f1-b3b3-9504458bcec0" />
Above is my simple mockup for my checklist app. A user can: add to the to-do list, check things off, or delete individual items from the list entirely.


<img width="247" height="325.66" alt="image" src="https://github.com/user-attachments/assets/a294cf35-4702-4061-863c-985088473d64" />
My UI Components are as follows:
1. App (purple) - contains entire app including the input fields
2. List (blue) - contains all items user has added to list
3. ListItem (red) - contains a checkbox and delete button for all items in list


<img width="339.33" height="255.66" alt="image" src="https://github.com/user-attachments/assets/60e6bf9b-93a5-49be-9190-3e4a60602774" />
My states are:
1. Input value - string
2. Items in list - ListItemData
3. Items checked/not - boolean

Based on the color coding above is where the states will live.

This assignment was literally so difficult?? For no reason?? At least I got this intro stuff out of the way before the project! Hopefully my group will know what they're doing a bit more than I do...
