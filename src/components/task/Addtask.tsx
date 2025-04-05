import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircle from '@mui/icons-material/AddCircle';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { useContext, useRef, useState } from 'react';
import Alert from '@mui/material/Alert';
import TaskContext from '../../store/taskcontext';
import { taskContext } from '../../lib/taskContext';
import { v7 as uuidv7 } from 'uuid';

const AddTask = () => {
    const { addTask } = useContext(TaskContext) as taskContext
    const [errors, setErrors] = useState<string[]>([])
    const titleRef = useRef<HTMLInputElement>(null)

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const title = titleRef.current?.value

        const errorList = []

        if (title === null || title === undefined || title?.trim() === "") {
            errorList.push("Task title is missing")    
        }

        if (errorList.length > 0) {
            setErrors(errorList)
            return
        }

        setErrors([])
        addTask({
            id : uuidv7().toString(),
            title: title || "",
            date :  new Date().toDateString()
        })
        event.currentTarget.reset()
    }
    return (
        <section>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap', 
                    '& > :not(style)': { m: 2, p: 1 } 
                }}
                onSubmit={onSubmitHandler}
                noValidate
                autoComplete="off"
            >
                <Paper elevation={3}>
                    <Stack spacing={2} direction="row">
                        <TextField 
                            size='small' 
                            id="task" 
                            label="task" 
                            variant="outlined" 
                            required
                            inputRef={titleRef}
                        />
                        <Button type='submit' color="success" variant="contained" startIcon={<AddCircle />}>
                            Add task
                        </Button>
                    </Stack>
                </Paper>
            </Box>
            {errors.length > 0 && (
                errors.map(error =>(
                    <Alert
                        onClose={() => setErrors([])} 
                        sx={{ mb: 3 }} 
                        key={error} 
                        variant="outlined" 
                        severity="error"
                    >
                        {error}
                    </Alert>
                ))
            )}
        </section>
    )
}

export default AddTask