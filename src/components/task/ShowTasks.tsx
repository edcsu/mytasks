import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearAll from '@mui/icons-material/ClearAll';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import TaskIcon from '@mui/icons-material/Task';
import Divider from '@mui/material/Divider';
import TaskCard from './TaskCard';
import Task from '../../lib/task'

const tasks: Task[] = [
    {
        "id": "e618495b-ac2d-4168-a7c5-ff8575d3de94",
        "title": "Learn React",
        "date": "2025-04-01"
    },
    {
        "id": "36a9cd9f-f341-4295-b5ee-ab8d9f00db77",
        "title": "Learn Next JS",
        "date": "2025-04-02"
    },
    {
        "id": "60396964-8875-41ab-af85-b437ddb46758",
        "title": "Learn Framer motion",
        "date": "2025-04-03"
    },
    {
        "id": "8e0af663-c2f6-4ad6-9b37-5ea4e3ebfc1b",
        "title": "Learn React router",
        "date": "2025-04-04"
    },
]

const ShowTasks = () => {
    
    return (
        <Box
            component="section"
        >
            <Grid container justifyContent="space-between" >
                <Badge badgeContent={4} color="primary">
                    <span>Todos</span>
                    <TaskIcon />
                </Badge>
                <Button 
                    type='submit' 
                    color="secondary" 
                    variant="contained"
                    size='small' 
                    startIcon={<ClearAll />}
                >
                    Clear All
                </Button>
            </Grid>
            <Divider
                variant="inset" 
                sx={{
                    m : 2
                }}
            />
            <Grid container justifyContent="space-between" >
               {tasks.map(task => ( <TaskCard key={task.id} task={task} />))}
            </Grid>
        </Box>
    )
}

export default ShowTasks