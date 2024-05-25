import DeleteOutline from "@mui/icons-material/DeleteOutline";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";

// interface ITodoListItem  {
//     todo: ITodoType;
//     deleteTodo:DeleteFn;
//     toggleTodo:ToggleFn
// }

interface ITodoListItem extends ITodoListFn {
  todo: ITodoType;
}

/**
 * @description Maps `<IconButton>` and `<ListItemText>` to display a list item for
 * a single todo item, with a secondary action to delete the todo item.
 * 
 * @param { `Id` . } .todo - taskt to be displayed and manipulated within the component.
 * 
 * 		- `todo`: An object containing the properties of a single todo item, including
 * the task name (`primary`), an identifier (`id`), and an action icon button
 * (`secondaryAction`) with a delete button inside.
 * 
 * @param { `function`. } .deleteTodo - `delete Todo` action that will be displayed
 * as a secondary action on the ListItem when the user clicks on it, and will delete
 * the Todo item with the specified `id`.
 * 
 * 		- `aria-label`: "comment"
 * 		- `sx`: A configuration object for styling the IconButton, with properties such
 * as `padding`, `cursor`, and `hover` colors.
 * 		- `onClick`: A function that is called when the IconButton is clicked. In this
 * case, it calls the `deleteTodo()` function with the `todo.id` parameter.
 * 
 * 	In summary, `.deleteTodo` is an IconButton component that has a specific styling
 * and behavior when clicked, including calling the `deleteTodo()` function with the
 * ID of the corresponding todo item.
 * 
 * @param { `fn`. } .toggleTodo - ID of a todo item that will be toggled (marked as
 * completed or uncompleted) when the `ToggleTodo` button is clicked.
 * 
 * 		- `todo`: The todo object being rendered, containing the task name and ID.
 * 		- `disableGutters`: A prop to disable gutters around the list item.
 * 		- `sx`: An object for styling the list item.
 * 		- `primary`: The text content of the list item's primary action.
 * 		- `onClick`: The callback function for when the list item is clicked.
 * 		- `aria-label`: The aria label for the delete button.
 * 		- `secondaryAction`: The secondary action button, which is an IconButton with
 * the delete outline icon.
 * 
 * @returns { Component } an ListItem component with a deletion icon and text
 * representing the task.
 */
const TodoListItem: FC<ITodoListItem> = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <ListItem
      disableGutters
      sx={{ padding: "1rem", cursor: "pointer" }}
      secondaryAction={
        <IconButton aria-label="comment">
          {/**
           * @description Enables a red highlight effect when hovering over it, and upon clicking,
           * deletes the corresponding todo item with the provided ID.
           * 
           * @param { object } sx - style prop for an SVG element, specifically setting the
           * color of the element to red upon hover.
           * 
           * @param { function. } onClick - delete operation on a specific todo item when the
           * Delete button is clicked.
           * 
           * 		- `sx`: An object with CSS styling properties, specifically `color` set to "red"
           * on `:hover`.
           */}
          <DeleteOutline
            sx={{ "&:hover": { color: "red" } }}
            onClick={() => deleteTodo(todo.id)}
          />
        </IconButton>
      }
    >
      {/**
       * @description Is used to display a todo task, which can be toggled on and off when
       * clicked.
       * 
       * @param { 'WordWRap' type. } sx - `style` prop for the `LiitemText` component and
       * allows customizing the appearance of the text.
       * 
       * 		- `wordWrap`: Specifies whether word wrap should be enabled or disabled for the
       * text within the element. In this case, it is set to `"break-word"`, which enables
       * word wrapping for the text.
       * 
       * @param { string } primary - task displayed as a list item, and its click event
       * triggers the `toggleTodo()` function to toggle the status of the task.
       * 
       * @param { Function. } onClick - event handler that is triggered when the list item
       * is clicked, and it calls the `toggleTodo` function to mark or unmark the task as
       * complete depending on its current status.
       * 
       * 		- `sx`: An object that can wrap text to new lines based on the "wordWrap" property.
       * 		- `primary`: A boolean value indicating whether the element is the primary component.
       * 		- `onClick`: The onClick function itself, which can be called upon button click.
       */}
      <ListItemText
        sx={{ wordWrap: "break-word" }}
        primary={todo.task}
        onClick={() => toggleTodo(todo)}
      />
    </ListItem>
  );
};
export default TodoListItem;
