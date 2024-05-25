import { Container } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";
import { notify, SweetIcon } from "../helper/sweetAlert";

// interface ITodoType {
//     task : string;
//     isDone: boolean;
//     id : string | number; //* id değeri string yada number olabilir
//     todo?: string //? bu alan zorunlu değil optional. Eğer varsa type ı string
// }

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

/**
 * @description Manages the todo list by fetching it from an API, adding, deleting
 * and toggle marking tasks using Axios requests, and updates the list after each action.
 * 
 * @returns { ITodoType } a React component that displays a list of todos and provides
 * buttons for adding, deleting, and toggling their completion.
 * 
 * 		- `todos`: An array of `ITodoType` objects, representing the list of Todo items.
 * 		- `addTodo`: A function that adds a new Todo item to the list with the task
 * provided as an argument.
 * 		- `toggleTodo`: A function that toggle the completion status of a Todo item in
 * the list.
 * 		- `deleteTodo`: A function that removes a Todo item from the list by its ID.
 * 
 * 	The `useEffect` hook is used to fetch the list of Todo items when the component
 * mounts.
 */
const Main = () => {
  // const [todos,setTodos] = useState([] as ITodoType[])
  // const [todos,setTodos] = useState<Array<ITodoType>>([])
  const [todos, setTodos] = useState<ITodoType[]>([]); //* yaygın olan kullanım
  console.log(todos);

  /**
   * @description Async function retrieves a list of Todos from an URL using Axios and
   * updates the `todos` state with the received data.
   */
  const getTodos = async () => {
    try {
      const { data } = await axios<ITodoType[]>(url);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //* 1.yol
  // const addTodo = async (task:string) => {
  //     try {

  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  //? 2.yol
  // type AddFn = (task:string) => Promise<void>;

  /**
   * @description Posts a new todo to an API endpoint with `url` and `{ task, isDone:
   * false }` as parameters, then notifies the user and retrieves the list of todos again.
   * 
   * @param { object } task - task that needs to be created.
   */
  const addTodo: AddFn = async (task) => {
    try {
      await axios.post(url, { task, isDone: false });
      notify("Todo created!", SweetIcon.SUCCESS);
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };
  /**
   * @description Updates the state of a Todo object by sending a PUT request to a
   * backend API endpoint with the Todo's ID and a new isDone property value, either
   * the current value or its opposite.
   * 
   * @param { object } todo - update details for a specific todo item.
   */
  const toggleTodo: ToggleFn = async (todo) => {
    try {
      await axios.put(`${url}/${todo.id}`, { ...todo, isDone: !todo.isDone });
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };
  /**
   * @description Deletes a specific todo from a server given its url and id using
   * `axios` library, handles potential errors, and then calls `getTodos()` to refresh
   * the data.
   * 
   * @param { number } id - ID of the todo to be deleted.
   */
  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      getTodos();
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodoComp addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </Container>
  );
};
export default Main;
