import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const C = () => {
  return (
    <div>
      <>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex p-0">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Principles of Programming using C</h1>
      </div>
      <center><h1 className='font-bold text-2xl'>Principles of Programming using C</h1></center>
      <div className='gap-[3%] flex p-3'>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1718-Ovit0sLWqONHFtQDwua_Zz7XnncH/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-1 
      </div></Link>
      <Link to={"https://drive.google.com/file/d/1Aut5OeXINp1ComaTJR3aF7ucxFiHg1G4/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-2
      </div></Link>
      <Link to={"https://drive.google.com/file/d/1cMq-Cl2YC7-rrxFummDXp43Ab5jEetOx/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-3
      </div></Link>
      <Link to={"https://drive.google.com/file/d/1f-wHj0fvNe81uM9pEoQdy_SyVBSiXb-I/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-4
      </div></Link>
      <Link to={"https://drive.google.com/file/d/1FM3HgiBN_khS1AoMIjIDXjlDQZFuClsn/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-5
      </div></Link>
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

export default C
