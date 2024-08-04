import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Mathematics = () => {
  return (
    <div>
      <>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex p-0">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Mathematics - I</h1>
      </div>
      <div>
      <center><h1 className='font-bold text-2xl'>Mathematics for CSE Stream</h1></center>
      <div className='gap-[3%] flex p-3'>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/11egyvedUBxPA19IeSO2VFHf1ehNQxFCV/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-1
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1dbJicROHn5lOk9Qhc0CAT5ZGhqeTYMnd/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-2
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1xb9ewtPv8r60C0M3kWre7MTxAVjOwUWL/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-3
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1FaXLhVeIwKQvY9g8VvWOXq_IXwQazXzq/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-4
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1SLXEiLygkXoLphSez05kOwH9QCPaCPsk/view?usp=drive_link"}>
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

export default Mathematics
