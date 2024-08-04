import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Civil = () => {
  return (
    <div>
      <>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex p-0">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Introduction to Civil Engineering</h1>
      </div>
      <div>
      <center><h1 className='font-bold text-2xl'>Introduction to Civil Engineering</h1></center>
      <div className='gap-[3%] flex p-3'>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1beM9PK54AjvVV3Ha6vyOnctHf4NPEDRC/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-1
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/17Cl95si6XPuY8lxWZ47cuRuqLh5g1KJL/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-2
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1AwCfba_Ffu4HFmX-HdJmcwOl-xsYyCN4/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-3
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1qMeasDG_F6gMtO9QUQxXw2zXCO1_-zxG/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-4
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1h6I6Gjf8PPz-9IFauGIrpQwAwI0mMN8L/view?usp=drive_link"}>
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

export default Civil
