import React, { useState } from 'react'
import { Box, Button, TextField} from '@mui/material';
import SaveIcon from "@mui/icons-material/Save";

interface IAddTodoComp {
    addTodo:(task:string) => Promise<void>
}
/**
 * @description Provides a text input field to add new todo, and a button to save the
 * task upon click. It also includes validation by disabling the button when no task
 * is entered.
 * 
 * @param { IAddTodoComp } .addTodo - `task` state, which stores the text entered by
 * the user in the `TextField`.
 * 
 * @returns { string } a form to add new todos, including a text field and a save button.
 */
const AddTodoComp = ({addTodo}:IAddTodoComp) => {
    // const [task, setTask] = useState<string>("")
    const [task, setTask] = useState("") //* Type Interface

    /**
     * @description Logs the value of the `task` variable to the console and resets the
     * `task` variable to an empty string.
     */
    const handleClick = () => {
        console.log(task);
        setTask("")
    }
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
       * @description Enables inputting of new todo tasks with a max length of 40 characters,
       * an initial value of `task`, and an on-change handler to update `task`.
       * 
       * @param { string } id - attribute "id" of the given HTML element, which is used to
       * provide a unique identifier for the element on the web page.
       * 
       * @param { string } label - visible name of an input field and appears as text above
       * it.
       * 
       * @param { string } color - color of the todo's label, and it can be set to one of
       * four options: "error", "info", "primary", or "success".
       * 
       * @param { object } sx - style for the text field and sets the min width for the
       * field on small screens (xs) to "100%", and on medium screens (sm) to "50%".
       * 
       * @param { string } variant - type of text field, specifically an "outlined" type
       * with an outline frame and rounded corners, as indicated by its value of "outlined".
       * 
       * @param { string } inputProps - maximum length of the `task` value that can be
       * entered by the user through the `TextField` component, ensuring that the input is
       * limited to a maximum of 40 characters.
       * 
       * @param { string } value - 0-indexed position of the currently focused form control
       * in the UncontrolledForm component, which is passed as the second argument to the
       * `onChange` handler and updated the `task` state variable upon user input.
       * 
       * @param { string } onChange - event handler for when the user modifies the value
       * of the `TextField`.
       */}
      <TextField
        id="outlined-basic"
        label="New Todo"
        color="success"
        sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
        variant="outlined"
        inputProps={{ maxLength: 40 }}
        value={task}
        onChange={(e)=>setTask(e.target.value)}
    
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
}

export default AddTodoComp