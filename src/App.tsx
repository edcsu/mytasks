import './App.css'
import Container from '@mui/material/Container';
import Header from './components/Header';
import AddTask from './components/task/Addtask';
import ShowTasks from './components/task/ShowTasks';
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
