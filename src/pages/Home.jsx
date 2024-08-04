import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import About from './About'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
    <Navbar/>
    <div className=" bg-custom-bg h-screen bg-cover bg-center flex items-center justify-center h-screen">
      <div className='flex-col'>
      <h1 className="text-6xl text-white font-bold"><center>Welcome to AIEMS HUB!!!</center></h1>
      <h2 className='text-2xl text-white font-bold'><center>A place where learning begins and knowledge never ends!!</center></h2>
      <center><Link to={"/About"}>
        <button type='button' className='px-3 py-2 max-w-fit bg-white text-black text-2xl rounded-[7%] mt-[3%]'>Learn About Us</button>
      </Link></center>
      </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Home
