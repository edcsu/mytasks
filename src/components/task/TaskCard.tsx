
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ITask from '../../lib/task';

type Props = {
    task: ITask
};

const TaskCard: React.FC<Props> = ({ task } : Props) => {
    const date = new Date(task.date);

    return (
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
            <IconButton aria-label="edit task">
            <EditDocumentIcon color="secondary" />
            </IconButton>
            <IconButton aria-label="delete task">
            <DeleteForeverIcon color="error" />
            </IconButton>
        </CardActions>
        </Card>
    )
}

export default TaskCard