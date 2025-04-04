import './App.css'
import Container from '@mui/material/Container';
import Header from './components/Header';
import ShowTasks from './components/task/ShowTasks';
import AddTask from './components/task/AddTask';

function App() {

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <AddTask />
        <ShowTasks />
      </Container>
    </>
  )
}

export default App
