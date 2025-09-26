import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className='max-w-[1280px] mx-auto'>
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
