import { Container } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";

// interface ITodoType {
//   task: string;
//   isDone: boolean;
//   id: string | number; //* id değeri string yada number olabilir
//   todo?: string; //? bu alan zorunlu değil optional. Eğer varsa type ı string
// }

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

/**
 * @description Retrieves todos from an API, stores them in state, and renders a
 * component for adding new todos and a list of existing ones.
 * 
 * @returns { array } an HTML component containing a header, an add to-do button, and
 * a list of todos.
 */
const Main = () => {
  // const [todos,setTodos] = useState([] as ITodoType[])
  // const [todos,setTodos] = useState<Array<ITodoType>>([])
  const [todos, setTodos] = useState<ITodoType[]>([]); //* yaygın olan kullanım
  console.log(todos);

  /**
   * @description Async fetches data from a URL and sets it as the value of the `Todos`
   * variable.
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
  // const addTodo =async (task:string) => {
  //   try {

  //   } catch (error) {
  //     console.log(error);
  //   }

  // }

  //* 2.yol
  type AddFn = (task: string) => Promise<void>;
  /**
   * @description Makes an asynchronous POST request to the given URL with a payload
   * containing `task` and `isDone: false`. It then calls `getTodos()` after successfully
   * making the request or logs an error message to the console if there is one.
   * 
   * @param { object } task - data to be sent to the API endpoint for performing an action.
   */
  const addTodo: AddFn = async (task) => {
    try {
      await axios.post(url, {task, isDone:false})
      getTodos()
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Container>
      <Header />
      <AddTodoComp addTodo={addTodo}/>
      <TodoList todos={todos}/>
    </Container>
  );
};
export default Main;
