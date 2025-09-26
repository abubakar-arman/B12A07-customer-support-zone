import { use } from 'react';
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import TicketSection from './Components/TicketSection/TicketSection';

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
        <Navbar></Navbar>
        <div className='max-w-[1280px] lg:mx-auto mx-10'>
          <Banner></Banner>
          <TicketSection data={data}></TicketSection>
        </div>
      </div>
    </>
  )
}

export default App
