import React from 'react'
import Navbar from '../components/navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Academics = () => {
  return (
    <div>
      <>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex ">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Academic</h1>
      </div>
      <div className='p-3'>
        <Card/>
      </div>
      <div className='bg-gray px-10 py-6 leading-12'>
        <Link to={"/"} className="bg-black text-white p-3" >Back</Link>
      </div>
      <Footer/>
      </>
    </div>
  )
}

export default Academics
