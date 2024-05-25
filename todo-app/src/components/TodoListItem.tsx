import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteOutline from "@mui/icons-material/DeleteOutline";

/**
 * @description Generates a list item with a delete button for secondary action. When
 * the delete button is clicked, the item will be removed from its parent container.
 * 
 * @returns { ListItem } a list item with a line item label and a secondary action
 * button for deleting the item.
 * 
 * 		- `ListItem`: This is a React component that represents a single item in a list.
 * 		- `disableGutters`: A boolean value that indicates whether the list should have
 * gutters or not.
 * 		- `secondaryAction`: An array of React components that represent additional
 * actions that can be taken on the list item. In this case, it is an `IconButton`
 * component with an `aria-label` attribute set to "comment".
 * 		- `ListItemText`: This is a React component that represents the primary text
 * content of the list item. In this case, it displays the string "Line item".
 */
const TodoListItem = () => {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          <DeleteOutline />
        </IconButton>
      }
    >
      <ListItemText primary={`Line item`} />
    </ListItem>
  );
};
export default TodoListItem;
