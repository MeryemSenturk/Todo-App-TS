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
