import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearAll from '@mui/icons-material/ClearAll';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import TaskIcon from '@mui/icons-material/Task';
import Divider from '@mui/material/Divider';
import TaskCard from './TaskCard';
import { useContext } from 'react';
import { taskContext } from '../../lib/taskContext';
import TaskContext from '../../store/taskcontext';

const ShowTasks: React.FC = () => {
    const { tasks, clearTasks } = useContext(TaskContext) as taskContext

    return (
        <Box
            component="section"
        >
            <Grid container justifyContent="space-between" >
                <Badge badgeContent={tasks.length} showZero color="primary">
                    <span>Tasks</span>
                    <TaskIcon />
                </Badge>
                <Button 
                    type='submit' 
                    color="secondary" 
                    variant="contained"
                    size='small' 
                    startIcon={<ClearAll />}
                    onClick={clearTasks}
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