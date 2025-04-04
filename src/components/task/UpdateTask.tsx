import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ITask from '../../lib/task';
import { useContext } from 'react';
import { taskContext } from '../../lib/taskContext';
import TaskContext from '../../store/taskcontext';

type Props = {
    taskToEdit: ITask
    open: boolean,
    closeEdit: () => void
};

const EditDialog: React.FC<Props> = ({ taskToEdit, open, closeEdit } : Props) => {
    const { editTask } = useContext(TaskContext) as taskContext

    const handleClose = () => {
        closeEdit();
    };

    return (
        <>
        <Dialog
            open={open}
            onClose={handleClose}
            slotProps={{
            paper: {
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    const task = formJson.task;
                    editTask(taskToEdit.id, task);
                    handleClose();
                },
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
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

export default EditDialog
