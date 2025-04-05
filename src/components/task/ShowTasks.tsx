import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearAll from '@mui/icons-material/ClearAll';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import TaskIcon from '@mui/icons-material/Task';
import Divider from '@mui/material/Divider';
import TaskCard from './TaskCard';
import { useContext, useState } from 'react';
import { taskContext } from '../../lib/taskContext';
import TaskContext from '../../store/taskcontext';
import ClearTasksDialog from './ClearTasksDialog';

const ShowTasks = () => {
    const { tasks } = useContext(TaskContext) as taskContext
    const [openClear, setOpenClear] = useState(false);

    const handleClickOpenClear = () => {
        setOpenClear(true);
    };
    
    const handleCloseClear = () => {
        setOpenClear(false);
    };
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
                    disabled={tasks.length < 1 ? true : false} 
                    type='submit' 
                    color="secondary" 
                    variant="contained"
                    size='small' 
                    startIcon={<ClearAll />}
                    onClick={handleClickOpenClear}
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
            <ClearTasksDialog open={openClear} closeClear={handleCloseClear}  />
        </Box>
    )
}

export default ShowTasks