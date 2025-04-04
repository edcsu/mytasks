import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ClearAll from '@mui/icons-material/ClearAll';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import TaskIcon from '@mui/icons-material/Task';
import Divider from '@mui/material/Divider';

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

    </Box>
  )
}

export default ShowTasks