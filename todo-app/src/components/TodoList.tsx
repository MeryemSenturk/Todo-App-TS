import { Grid, Typography } from "@mui/material";
import TodoListItem from "./TodoListItem";
import React from "react";

interface ITodoList {
  todos: ITodoType[];
}

//* 3.yol React.FC kullanımı
//! React.FC, bir functional component'i ifade eder. Bileşenin işlevsel bir yapıda olduğunu ve React tarafından kullanılabileceğini belirtir.

//? React.FC, bileşenlere props tanımlamak ve JSX döndürmek için kullanılan bir genel tip (generic type) olarak kullanılır. Bu tip, bileşenin alacağı props'ların tipini belirtmek için kullanılır. Props'ların tipini belirtmek, bileşenin daha güvenli ve hatasız olmasını sağlar.

//* Ancak, React.FC kullanmak zorunlu değildir. Fonksiyonel bir bileşen, sadece fonksiyon olarak da tanımlanabilir ve React.FC kullanmadan da props alabilir ve JSX döndürebilir.

//+ FC, "FunctionComponent" kelimelerinin kısaltmasıdır.

/**
 * @description Generates high-quality documentation for code given to it, based on
 * two arrays of Todo objects: `progressTodos` and `completedTodos`. It returns a
 * layout with two grids, each displaying the appropriate Todos based on their status.
 * 
 * @param { array } .todos - array of todos that the function will work on, and it
 * is used to filter out the inprogress and completed todos from the original array.
 * 
 * @returns { object } a grid container that displays two grids, each containing a
 * list of TodoItem components.
 */
const TodoList: React.FC<ITodoList> = ({ todos }) => {
  const progressTodos = todos.filter((todo) => !todo.isDone);
  const completedTodos = todos.filter((todo) => todo.isDone);
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        mt: 1,
      }}
    >
      {/**
       * @description Displays a list of `TodoListItem` components, which display information
       * about each todo item's status as "InProgress".
       * 
       * @param { 12-item grid container. } xs - 12 columns on small screens, such as
       * smartphones or tablets.
       * 
       * 		- `item`: The number of items to display in each row.
       * 		- `xs`: The grid system for small screens (less than 400px).
       * 		- `sm`: The grid system for medium-sized screens (400px - 600px).
       * 		- `md`: The grid system for medium-sized screens (600px - 900px).
       * 		- `sx`: The CSS object for styling the grid, including the min and max height,
       * overflow behavior, border radius, and border color.
       * 
       * @param { integer } sm - 8-column width on medium-sized devices in the grid structure.
       * 
       * @param { array } md - 6th item in the grid layout, displaying 6 items per row on
       * medium-sized screens (i.e., screen sizes between 601px and 768px).
       * 
       * @param { object } sx - CSS styling for the Grid component, including the minimum
       * and maximum height, as well as overflow behavior, border radius, and border color.
       */}
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid purple",
          borderRadius: "1rem",
        }}
      >
        <Typography>InProgress Todos</Typography>
        {progressTodos.length ? (
          progressTodos.map((todo) => <TodoListItem />)
        ) : (
          <Typography color="error">No InProgress Todos!</Typography>
        )}
      </Grid>
      {/**
       * @description Renders a list of `TodoListItem` components based on the length of
       * the `completedTodos` array, displaying the completed tasks when there are any, and
       * indicating otherwise with a message.
       * 
       * @param { 12-unit length. } xs - 12th grid item in the `Grid` component.
       * 
       * 		- `item`: The number of columns to span across the grid.
       * 		- `sm`: The minimum width of each column in small breakpoints.
       * 		- `md`: The minimum width of each column in medium breakpoints.
       * 		- `sx`: An object containing properties for customizing the grid.
       * 		+ `minHeight`: The minimum height of the grid container.
       * 		+ `maxHeight`: The maximum height of the grid container.
       * 		+ `overflow`: The behavior when the content exceeds the grid height, with "auto"
       * being the default.
       * 		+ `border`: The border width and color.
       * 		+ `borderRadius`: The corner radius of the grid container.
       * 
       * @param { number } sm - 6-column layout size for the `Grid` component, which allows
       * for better spacing and arrangement of components within the grid.
       * 
       * @param { 8-based grid item index. } md - 6-column grid layout for medium-sized
       * screens and above.
       * 
       * 		- `item`: The number of items to be placed in the grid.
       * 		- `xs`: The number of items to be placed in the extra small breakpoint (0-576px).
       * 		- `sm`: The number of items to be placed in the small breakpoint (576-768px).
       * 		- `md`: The number of items to be placed in the medium breakpoint (768-960px).
       * 		- `sx`: The number of items to be placed in the extra large breakpoint (1200px
       * and above).
       * 		- `minHeight` and `maxHeight`: The minimum and maximum height of the grid, respectively.
       * 		- `overflow` and `borderRadius`: Additional styles for the grid container.
       * 
       * @param { object } sx - styling for the component, specifically setting the minHeight
       * and maxHeight of the containing element to ensure the grid item has enough vertical
       * space, as well as adding a border and radius to visually distinguish the grid item
       * from others.
       */}
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          minHeight: "350px",
          maxHeight: "350px",
          overflow: "auto",
          border: "1px solid green",
          borderRadius: "1rem",
        }}
      >
        <Typography>Completed Todos</Typography>
        {completedTodos.length ? (
          completedTodos.map((todo) => <TodoListItem />)
        ) : (
          <Typography color="error">No Completed Todos!</Typography>
        )}
      </Grid>
    </Grid>
  );
};
export default TodoList;
