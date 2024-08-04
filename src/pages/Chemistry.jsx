import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Chemistry = () => {
  return (
    <div>
      <>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex p-0">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Applied Chemistry for CSE stream</h1>
      </div>
      <div>
      <center><h1 className='font-bold text-2xl'>Applied Chemistry for CSE stream</h1></center>
      <div className='gap-[3%] flex p-3'>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1iv7E_wx7hy_L-iMz1zSBRRh-U6sIiUVf/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-1
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/142eILkGRbUlvLYINjPzegf0JPJmDqB4k/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-2
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1Hy9jUOImERc7Mir9z8EbDjDNePZozSal/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-3
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1HxTE11P8pQ4vGCDQN7CK3zGrmAt7w7yq/view?usp=drive_link"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Module-4
      </div></Link>
      </div>
      <div className="gap-[3%] flex">
    <Link to={"https://drive.google.com/file/d/1OO0HucIh11WjSQWET1Ji-BFASGdjDatN/view?usp=drive_link"}>
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

export default Chemistry
