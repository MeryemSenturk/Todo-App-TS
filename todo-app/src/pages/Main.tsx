import { Container } from "@mui/material";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import AddTodoComp from "../components/AddTodoComp";

interface ITodoType {
  task: string;
  isDone: boolean;
  id: string | number; //* id değeri string yada number olabilir
  todo?: string; //? bu alan zorunlu değil optional. Eğer varsa type ı string
}

const url = "https://634ac3fc5df952851418480f.mockapi.io/api/todos";

/**
 * @description Uses `useState` to initialize an array of Todo objects and fetches
 * todos from an API using `useEffect`. It also provides an `AddTodoComp` component
 * for adding new Todos.
 * 
 * @returns { object } a functional component that renders an HTML container with a
 * header and an add todo form.
 */
const Main = () => {
  // const [todos,setTodos] = useState([] as ITodoType[])
  // const [todos,setTodos] = useState<Array<ITodoType>>([])
  const [todos, setTodos] = useState<ITodoType[]>([]); //* yaygın olan kullanım
  console.log(todos);

  /**
   * @description Asynchronous calls the `axios` API to retrieve a list of todos from
   * a specified URL, then sets the retrieved data to the `todo` variable.
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
   * @description Posts a request to a URL using `axios` and sets an internal flag to
   * false upon completion, triggering the calling code to call another function.
   * 
   * @param { object } task - task to be performed using `axios.post()` method and sets
   * its state to `false` indicating that the task is not completed yet.
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
    </Container>
  );
};
export default Main;
