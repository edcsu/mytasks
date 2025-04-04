import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useContext } from 'react';
import { taskContext } from '../../lib/taskContext';
import TaskContext from '../../store/taskcontext';

type Props = {
    open: boolean,
    closeClear: () => void
};

const ClearTasksDialog: React.FC<Props> = ({ open, closeClear } : Props) => {
    const { clearTasks } = useContext(TaskContext) as taskContext

    const handleClose = () => {
        closeClear();
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
                        clearTasks();
                        handleClose();
                    },
                },
                }}
            >
                <DialogContent>
                    Are you sure you want to delete all your tasks?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button type="submit">Yes</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default ClearTasksDialog
