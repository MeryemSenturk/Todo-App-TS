import React, { useState } from 'react'
import { Box, Button, TextField} from '@mui/material';
import SaveIcon from "@mui/icons-material/Save";

interface IAddTodoComp {
    addTodo:(task:string) => Promise<void>
}
const AddTodoComp = ({addTodo}:IAddTodoComp) => {
    // const [task, setTask] = useState<string>("")
    const [task, setTask] = useState("") //* Type Interface

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