import { use, useState } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import TicketSection from './Components/TicketSection/TicketSection';
import StatusSection from './Components/StatusSection/StatusSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Components/Footer/Footer';
import { toast, ToastContainer } from 'react-toastify';


const fetchData = async () => {
  try {
    const res = await fetch('data.json');
    return res.json()
  } catch (err) {
    console.error('Fetch error:', err)
  }
}

const dataPromise = fetchData()

function App() {
  const data = use(dataPromise)

  const [tasksInProgress, setTasksInProgress] = useState([])
  const [tasksResolved, setTasksResolved] = useState([])
  const [tasksDB, setTasksDB] = useState(data)

  const handleTicketClick = (task) => {
    if(!tasksInProgress.some(t => t.id === task.id)){
      setTasksInProgress([...tasksInProgress, task])
      task.status='In Progress'
      toast.success(task.status)
    } 
  }

  const handleTaskComplete = (task) => {
    if(task.status === 'Resolved'){
      return
    }
    task.status='Resolved'
    setTasksResolved([...tasksResolved, task])

    const newTasksInProgress = tasksInProgress.filter(t => t.id != task.id)
    setTasksInProgress(newTasksInProgress)

    const newTasksDB = tasksDB.filter(t => t.id != task.id)
    setTasksDB(newTasksDB)
    toast.success(task.status)
  }

  return (
    <>
      <div className='bg-zinc-200'>
        <Navbar />
        <div className='max-w-[1280px] lg:mx-auto mx-10 px-5'>
          <Banner tasksInProgress={tasksInProgress} tasksResolved={tasksResolved} />
          <div id='main-section' className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
            <TicketSection tasksDB={tasksDB} handleTicketClick={handleTicketClick} />
            <StatusSection tasksInProgress={tasksInProgress} tasksResolved={tasksResolved} handleTaskComplete={handleTaskComplete} />
          </div>
        </div>
        <Footer />
        <ToastContainer />
      </div>
    </>
  )
}

export default App
