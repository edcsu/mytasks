
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ITask from '../../lib/task';
import { useContext, useState } from 'react';
import { taskContext } from '../../lib/taskContext';
import TaskContext from '../../store/taskcontext';
import EditTaskDialog from './UpdateTask';
import DeleteTaskDialog from './DeleteTaskDialog';

type Props = {
    task: ITask
};

const TaskCard: React.FC<Props> = ({ task } : Props) => {
    const date = new Date(task.date);
    const { deleteTask } = useContext(TaskContext) as taskContext
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    
    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };
    
    const handleCloseEdit = () => {
        setOpenEdit(false);
    };
    
    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };
    
    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    return (
        <>
            <Card raised sx={{ minWidth: 250, m: 1 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        {task.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        <time>{date.toLocaleDateString()}</time>
                    </Typography>
                </CardContent>
                <CardActions sx={{ mt: -4 }}>
                    <IconButton aria-label="edit task" onClick={handleClickOpenEdit}>
                        <EditDocumentIcon color="secondary" />
                    </IconButton>
                    <IconButton aria-label="delete task" onClick={handleClickOpenDelete}>
                        <DeleteForeverIcon color="error" />
                    </IconButton>
                </CardActions>
            </Card>
            <EditTaskDialog 
                open={openEdit} 
                closeEdit={handleCloseEdit} 
                taskToEdit={task}
            />
            <DeleteTaskDialog open={openDelete} closeDelete={handleCloseDelete} id={task.id} />
        </>
    )
}

export default TaskCard