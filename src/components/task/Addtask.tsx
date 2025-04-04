import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircle from '@mui/icons-material/AddCircle';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const Addtask = () => {
  return (
    <section>
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexWrap: 'wrap', 
                '& > :not(style)': { m: 2, p: 1 } 
            }}
            noValidate
            autoComplete="off"
        >
            <Paper elevation={3}>
                <Stack spacing={2} direction="row">
                    <TextField 
                        size='small' 
                        id="task" 
                        label="task" 
                        variant="outlined" 
                    />
                    <Button type='submit' color="success" variant="contained" startIcon={<AddCircle />}>
                        Add task
                    </Button>
                </Stack>
            </Paper>
        </Box>
    </section>
  )
}

export default Addtask