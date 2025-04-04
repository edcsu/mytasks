
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditDocumentIcon from '@mui/icons-material/EditDocument';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TaskCard = () => {
    const date = new Date();

    return (
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
            <Typography gutterBottom sx={{ fontSize: 14 }}>
                Word of the Day
            </Typography>
            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                <time>{date.toLocaleDateString()}</time>
            </Typography>
        </CardContent>
        <CardActions>
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