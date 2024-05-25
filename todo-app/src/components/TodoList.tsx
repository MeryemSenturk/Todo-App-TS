import { Grid, Typography } from "@mui/material";
import React from "react";
import TodoListItem from "./TodoListItem";
import "./style.css";
// interface ITodoList {
//     todos: ITodoType[];
//     deleteTodo:DeleteFn;
//     toggleTodo:ToggleFn
// }

interface ITodoList extends ITodoListFn {
  todos: ITodoType[];
}

//* 3.yol React.FC kullanımı
//! React.FC, bir functional component'i ifade eder. Bileşenin işlevsel bir yapıda olduğunu ve React tarafından kullanılabileceğini belirtir.

//? React.FC, bileşenlere props tanımlamak ve JSX döndürmek için kullanılan bir genel tip (generic type) olarak kullanılır. Bu tip, bileşenin alacağı props'ların tipini belirtmek için kullanılır. Props'ların tipini belirtmek, bileşenin daha güvenli ve hatasız olmasını sağlar.

//* Ancak, React.FC kullanmak zorunlu değildir. Fonksiyonel bir bileşen, sadece fonksiyon olarak da tanımlanabilir ve React.FC kullanmadan da props alabilir ve JSX döndürebilir.

//+ FC, "FunctionComponent" kelimelerinin kısaltmasıdır.

/**
 * @description Returns a component that renders two grids displaying either "InProgress
 * Todos" or "Completed Todos", based on the length of the respective arrays. The
 * component accepts three props: `todos`, `deleteTodo`, and `toggleTodo`.
 * 
 * @param { array } .todos - array of todos that needs to be filtered and displayed
 * in two separate sections based on their completion status.
 * 
 * @param { `Function`. } .deleteTodo - `deleteTodo` function, which when called,
 * will delete the Todo item passed as an argument from the list of InProgress Todos.
 * 
 * 		- `deleteTodo`: This function is the primary action for removing a todo from the
 * list.
 * 		- `todo`: This property represents the todo that will be removed upon calling
 * the `deleteTodo` function.
 * 
 * 	The function returns no value, as it is meant to be a pure function without any
 * side effects.
 * 
 * @param { boolean } .toggleTodo - 🎲 icon next to each completed todo and allows
 * users to toggle its state back to InProgress by clicking on it again.
 * 
 * @returns { object } a React component that displays two lists of Todos, one for
 * InProgress and one for Completed, using the `filter` method to create them.
 */
const TodoList: React.FC<ITodoList> = ({ todos, deleteTodo, toggleTodo }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        mt: 3,
      }}
    >
      {/**
       * @description Provides a container for displaying a list of "InProgress Todos" using
       * the `Typography` and `TodoListItem` components. It retrieves the length of the
       * `progressTodos` array, maps over it to display each todo item, and handles deleting
       * or toggleing todo items when their respective buttons are clicked.
       * 
       * @param { number } xs - 12-column layout size for the grid container, allowing for
       * proper spacing and alignment of its children elements within the specified space.
       * 
       * @param { 8-based grid size. } sm - 8th column for the Grid component, which sets
       * the grid spacing for medium-sized screens (i.e., devices with screen sizes between
       * 768px and 1024px).
       * 
       * 		- `position`: The property `position` is set to `"relative"`, which means that
       * the child elements will be positioned relative to their parent element.
       * 		- `className`: The class name `myscrool scrool-progress` is assigned to the `
       * Grid` component, indicating that it should be used for progress tracking.
       * 		- `sx`: The property `sx` contains several attributes related to layout and styling:
       * 		+ `minHeight`: Set to `"350px"` to ensure that the grid has a minimum height of
       * 350 pixels.
       * 		+ `maxHeight`: Set to `"350px"` to ensure that the grid has a maximum height of
       * 350 pixels.
       * 		+ `overflow`: Set to `"auto"` to allow the content of the grid to overflow if
       * necessary, without hiding it behind an ellipsis.
       * 		+ `border`: Set to `"1px solid purple"` to add a 1-pixel border to the grid with
       * a purple color.
       * 		+ `borderRadius`: Set to `"0.5rem"` to round the edges of the grid to half a rem
       * unit (approximately 7.87 pixels at a font size of 16).
       * 
       * @param { 5-value numeric variable. } md - 5th column of the `Grid` component and
       * is used to define the number of items to display in the middle row of the grid
       * when the screen size is medium or larger.
       * 
       * 		- `position`: The property `position` is set to `"relative"`. This specifies
       * that the Grid should be positioned relative to its parent element.
       * 		- `className`: The className attribute is set to `"myscrool scrool-progress"`.
       * This adds a custom class name to the Grid element for styling purposes.
       * 		- `sx`: The `sx` property is an object containing various CSS properties and
       * values for the Grid element. These include:
       * 		+ `minHeight`: The value of `minHeight` is set to `"350px"`. This specifies a
       * minimum height for the Grid element of 350 pixels.
       * 		+ `maxHeight`: The value of `maxHeight` is also set to `"350px"`. This specifies
       * a maximum height for the Grid element of 350 pixels.
       * 		+ `overflow`: The value of `overflow` is set to `"auto"`. This specifies that
       * any content that exceeds the height of the Grid element should be automatically
       * overflowed to the next line.
       * 		+ `border`: The value of `border` is set to `1px solid purple`. This sets a
       * border width of 1 pixel and specifies that it should be solid (i.e., filled) with
       * a color of purple.
       * 		+ `borderRadius`: The value of `borderRadius` is set to `"0.5rem"`. This sets
       * the rounded corners of the Grid element to have a radius of 0.5 rem (i.e., relative
       * to the size of the Grid element).
       * 
       * @param { string } position - `position` of the grid container in which the todos
       * are displayed, with possible values of `"relative"` or other CSS positioning options.
       * 
       * @param { string } className - class name for the grid container, defining its
       * appearance and layout options.
       * 
       * @param { object } sx - styles object that applies specific CSS properties to the
       * component's grid container, including setting the minimum and maximum heights of
       * the grid, enabling overflow, adding a border radius, and setting the border color.
       */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-progress"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "0.5rem",
        }}
      >
        <Typography
          className="title"
          color="secondary"
          align="center"
          variant="h4"
        >
          InProgress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No InProgress Todos!
          </Typography>
        )}
      </Grid>
      {/**
       * @description Renders a list of `TodoListItem` components, each representing a
       * completed todo, with a green title and a delete/toggle button for each item.
       * 
       * @param { 12-based grid size. } xs - 12th grid item position for the component
       * layout within its container.
       * 
       * 		- `item`: The number of columns to span within the container. In this case, it
       * is set to 12 in the `xs` prop.
       * 		- `sm`: The breakpoint at which the grid will switch to a different layout. In
       * this case, it is set to 8 for small breaks and 5 for medium breaks.
       * 		- `md`: The breakpoint at which the grid will switch to a different layout. In
       * this case, it is set to 5 for medium-dark breaks.
       * 		- `position`: The position of the grid within its container. In this case, it
       * is set to "relative" so that the grid can be positioned relative to its containing
       * element.
       * 		- `className`: A class name to apply to the grid container element. In this case,
       * it is set to "myscrool scrool-completed".
       * 		- `sx`: An object of CSS styles to apply to the grid container element. The
       * following properties are defined:
       * 		+ `minHeight`: The minimum height of the grid container element. It is set to 350px.
       * 		+ `maxHeight`: The maximum height of the grid container element. It is set to 350px.
       * 		+ `overflow`: Whether the grid should overflow or be clipped when its content
       * exceeds its bounds. It is set to "auto".
       * 		+ `border`: The border width and color of the grid container element. It is set
       * to 1px solid green.
       * 		+ `borderRadius`: The radius of the corners of the grid container element. It
       * is set to 0.5rem.
       * 
       * @param { integer } sm - 8-column block size for medium-sized screens and higher,
       * ensuring optimal spacing and alignment of content within the grid layout.
       * 
       * @param { 5-based index. } md - 5th column of the ` Grid` component, where the
       * completed todos will be displayed.
       * 
       * 		- `position`: The `position` property is set to `"relative"`.
       * 		- `className`: The `className` attribute is set to `"myscrool scrool-completed"`.
       * 		- `sx`: The `sx` attribute is a mapping of CSS properties and values that modify
       * the appearance of the grid. Here, it sets the minimum height to `350px`, maximum
       * height to `350px`, and uses the `overflow` property to prevent any excess content
       * from overflowing. It also sets the border color to `green`, and adds a radius of
       * `0.5rem` to the borders using the `borderRadius` property.
       * 		- `Completed Todos`: The `completedTodos` variable is passed as a prop to the
       * component, containing an array of completed todos.
       * 
       * @param { string } position - horizontal position of the grid container relative
       * to its parent element, with options for `relative`, `absolute`, or `fixed`.
       * 
       * @param { string } className - class name for the `Grid` element that contains the
       * list of completed todos, allowing for customizable styling and layout options.
       * 
       * @param { object } sx - styles object for the component, allowing you to customize
       * the layout and appearance of the completed todos list.
       */}
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        position={"relative"}
        className="myscrool scrool-completed"
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid green",
          borderRadius: "0.5rem",
        }}
      >
        <Typography
          className="title"
          sx={{ color: "green" }}
          align="center"
          variant="h4"
        >
          Completed Todos
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => (
            <TodoListItem
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              todo={todo}
              key={todo.id}
            />
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Completed Todos!
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
export default TodoList;
