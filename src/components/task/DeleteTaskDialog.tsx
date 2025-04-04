import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useContext } from 'react';
import { taskContext } from '../../lib/taskContext';
import TaskContext from '../../store/taskcontext';

type Props = {
    id: string
    open: boolean,
    closeDelete: () => void
};

const DeleteTaskDialog: React.FC<Props> = ({ id, open, closeDelete } : Props) => {
    const { deleteTask } = useContext(TaskContext) as taskContext

    const handleClose = () => {
        closeDelete();
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
                    deleteTask(id);
                    handleClose();
                },
            },
            }}
        >
            <DialogContent>
                Are you sure you want to delete this task?
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button type="submit">Yes</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}

export default DeleteTaskDialog
