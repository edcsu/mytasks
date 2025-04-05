import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ITask from '../../lib/task';
import { useContext, useState } from 'react';
import { taskContext } from '../../lib/taskContext';
import TaskContext from '../../store/taskcontext';
import { Alert } from '@mui/material';

type Props = {
    taskToEdit: ITask
    open: boolean,
    closeEdit: () => void
};

const EditTaskDialog: React.FC<Props> = ({ taskToEdit, open, closeEdit } : Props) => {
    const { editTask } = useContext(TaskContext) as taskContext
    const [errors, setErrors] = useState<string[]>([])

    const handleClose = () => {
        closeEdit()
        setErrors([])
    };

    const handleEditsubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries((formData).entries());
        let title = formJson.task;
        title = title as string
        title = title.trim()
        const errorList = [];

        if (title === null || title === undefined || title === "") {
            errorList.push("Task title is missing");
        }

        if (errorList.length > 0) {
            setErrors(errorList);
            return;
        }
        editTask(taskToEdit.id, title.trim());
        handleClose();
    };
    return (
        <>
        <Dialog
            open={open}
            onClose={handleClose}
            slotProps={{
            paper: {
                component: 'form',
                onSubmit: handleEditsubmit,
            },
            }}
        >
            <DialogTitle>{taskToEdit.title}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="task"
                    name="task"
                    label="Task"
                    type="text"
                    fullWidth
                    variant="outlined"
                    defaultValue={taskToEdit.title}
                />
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
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Save</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

export default EditTaskDialog
