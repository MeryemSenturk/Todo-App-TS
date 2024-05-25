import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
//*1.yol
// const AddTodoComp = ({addTodo}:{addTodo:(task:string)=>Promise<void>}) => {
//   // const [task,setTask] = useState<string>("")//! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.
//   const [task, setTask] = useState(""); //* Type Inference

//   const handleClick = () => {
//     console.log(task);
//     addTodo(task)
//     setTask("");
//   };
//   return (
//     <Box
//       sx={{
//         display: { xs: "block", sm: "flex" },
//         justifyContent: { xs: "flex-start", sm: "center" },
//         m: { xs: 1, sm: "auto" },
//         height: { xs: "120px", sm: "80px" },
//       }}
//     >
//       <TextField
//         id="outlined-basic"
//         label="New Todo"
//         color="success"
//         sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
//         variant="outlined"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         inputProps={{ maxLength: 40 }}
//       />
//       <Button
//         variant="contained"
//         color="success"
//         sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
//         endIcon={<SaveIcon />}
//         onClick={handleClick}
//         disabled={!task.trim()}
//       >
//         Save Todo
//       </Button>
//     </Box>
//   );
// };
// export default AddTodoComp;

interface IAddTodoComp {
  // addTodo:(task:string)=>Promise<void>;
  addTodo: AddFn;
}

//? 2.yol
/**
 * @description Provides a text field and a "Save Todo" button to input and save a
 * new todo item in the state. The 'Save Todo' button is disabled when the input field
 * is empty.
 * 
 * @param { IAddTodoComp } .addTodo - `addTodo` function, which is called with the
 * given task when the "Save Todo" button is clicked.
 * 
 * @returns { array } a form for adding new todo items with a text field and a save
 * button.
 */
const AddTodoComp = ({ addTodo }: IAddTodoComp) => {
  // const [task,setTask] = useState<string>("")//! her zaman type belirtmemize gerek yok. Typescript type inference özelliği sayesinde inital değerine göre otomatik type ataması yapıyor.
  const [task, setTask] = useState(""); //* Type Inference

  /**
   * @description Logs the provided `task` to the console, adds it to a to-do list using
   * the `addTodo` function, and then resets the `task` field to an empty string.
   */
  const handleClick = () => {
    console.log(task);
    addTodo(task);
    setTask("");
  };
  return (
    <Box
      sx={{
        display: { xs: "block", sm: "flex" },
        justifyContent: { xs: "flex-start", sm: "center" },
        m: { xs: 1, sm: "auto" },
        height: { xs: "120px", sm: "80px" },
      }}
    >
      {/**
       * @description Creates an outlined basic text field with a label and input box. The
       * label is labeled "New Todo" and the input box has a maximum length of 40 characters.
       * 
       * @param { string } id - unique identifier of a new todo item.
       * 
       * @param { string } label - text shown to the user inside the `TextField` element,
       * in this case it is "New Todo".
       * 
       * @param { string } color - color of the todo item displayed within the field, and
       * its value is used to set the UI element's `backgroundColor` property to create a
       * visually distinct outcome.
       * 
       * @param { object } sx - styling configuration for the field, defining properties
       * such as minimum width and height, and can be used to customize the appearance of
       * the input field.
       * 
       * @param { string } variant - material design theme for the field, and specifically
       * sets it to the `outlined` theme.
       * 
       * @param { string } value - task value that is to be assigned to the `Todo` element
       * when the component is rendered.
       * 
       * @param { `Event` or `/event` in the provided code snippet. } onChange - event that
       * occurs when the user types something into the input field and is passed to the
       * `setTask` function, allowing the value of the input field to be updated in real time.
       * 
       * 		- `e.target.value`: This represents the new value entered by the user in the `TextField`.
       * 		- `setTask`: A function that sets a new task value based on the new value entered
       * by the user.
       * 
       * @param { object } inputProps - maximum length of the value that can be entered in
       * the text field, and it is set to 40 in this case.
       */}
      <TextField
        id="outlined-basic"
        label="New Todo"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        inputProps={{ maxLength: 40 }}
      />
      <Button
        variant="contained"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
        endIcon={<SaveIcon />}
        onClick={handleClick}
        disabled={!task.trim()}
      >
        Save Todo
      </Button>
    </Box>
  );
};
export default AddTodoComp;
