import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Ece = () => {
  return (
    <div>
      <>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex p-0">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Introduction to Electronics and communication</h1>
      </div>
      <div>
      <center><h1 className='font-bold text-2xl'>Introduction to Electronics and Communication</h1></center>
      <div className='gap-[3%] flex p-3'>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/132pWf3Cehq22ibl1x3RtBWwmBrkRh9h0/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-1
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1YgVuWWsl4j_zLHObvJ9D6SfWriobsvlb/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-2
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1l6-b2rBgthJs1wFMbqjN5DztJxlvvE1x/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-3
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/14YNEOpmWZjILjbBIsX9_Z1YEP_EbqHgP/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-4
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1vM51l-qaqfo-ywnmrhSBdMPUXci59kUS/view?usp=drive_link"}>
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

export default Ece
