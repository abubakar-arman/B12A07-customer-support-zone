import { use } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import TicketSection from './Components/TicketSection/TicketSection';
import StatusSection from './Components/StatusSection/StatusSection';

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

  return (
    <>
    <div className='bg-zinc-200'>
        <Navbar />
        <div className='max-w-[1280px] lg:mx-auto mx-10 px-5'>
          <Banner />
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
          <TicketSection data={data} />
          <StatusSection />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
