import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Iot = () => {
  return (
    <div>
      <>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex p-0">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Introduction to Internet of things</h1>
      </div>
      <div>
      <center><h1 className='font-bold text-2xl'>Introduction to Internet of things</h1></center>
      <div className='gap-[3%] flex p-3'>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/10oyr-C2mGNIzMgUetn-C727eXBD1D6je/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-1
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1bavGwwhDQ_x70N62NCBq6sqIjBotO7NC/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-2
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1K9ftrmUnEw3E547pjJKEplvKLSJVwZhn/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-3
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1NroXH3jMwCIWKLqu5gV5IVBd5tznLbwH/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-4
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1smUCsAUheMO2VYuoEikyfHkPsHHw0-IO/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-5
      </div></Link>
      </div>
      </div>
      </div>
      <div className='bg-gray px-10 py-6 leading-12'>
        <Link to={"/Academics"} className="bg-black text-white p-3" >Back</Link>
      </div>
      <Footer/>
      </>
    </div>
  )
}

export default Iot
