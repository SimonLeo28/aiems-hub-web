import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Physics = () => {
  return (
    <div>
      <>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex p-0">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Applied Physics For CSE Stream</h1>
      </div>
      <center><h1 className='font-bold text-2xl'>Applied Physics for CSE Stream</h1></center>
      <div className='gap-[3%] flex p-3'>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1hw6tS6C9J5Mba8LKB-gC5SVfctUFZyXJ/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-1 
      </div></Link>
      <Link to={"https://drive.google.com/file/d/1tsLUgZk-Qp2sK5UwEazccMI56qIpKpeq/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-2
      </div></Link>
      <Link to={"https://drive.google.com/file/d/1GGF9ypMhuF7sqKzNpW4TMScIH-Cobe4L/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-3
      </div></Link>
      <Link to={"https://drive.google.com/file/d/1TRoV0WZc7MDKKJeQvHgbkSm_u4sI2yja/view?usp=drive_link"}>
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

export default Physics
