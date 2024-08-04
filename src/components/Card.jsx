import React from 'react'
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <div className='gap-[3%]'>
    <div>
    <div className="gap-[3%] flex">
    <Link to={"/Academic/Mathematics-I"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
      Mathematics-I
      </div></Link>
      <Link to="/Academic/Mathematics-II">
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
        Mathematics-II
      </div></Link>
      <Link to={"/Academic/Applied-Physics"}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
        Applied Physics
      </div></Link>
      <Link to={'/Academic/Chemistry'}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
        Applied Chemistry
      </div></Link>
      <Link to={'/Academic/C'}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
        <center>Principles of Programming using C</center>
      </div></Link>
    </div>
    </div>
    <div className='mt-[2%]'>
    <div className="p-0px gap-[3%] flex">
      <Link to={'/Academic/Python'}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
        <center>Introduction to Python Programming</center>
      </div></Link>
      <Link to={'/Academic/Ece'}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
       <center> Introduction to electronics and communication</center>
      </div></Link>
      <Link to={'/Academic/Iot'}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
        Intoduction to IOT
      </div></Link>
      <Link to={'/Academic/Python'}>
      <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
        <center>Introduction to civil<br/> engineering</center>
      </div></Link>
      {/* <div className="w-64 h-64 bg-gray-100 font-bold text-black flex justify-center items-center rounded-[20%]">
        Communication skills
      </div> */}
    </div>
    </div>
    </div>
  )
}

export default Card
