import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios"

const backend = import.meta.env.VITE_BACKEND_URL


const BlogPost = () => {

  
  const sendData = async (title,content)=>{
    try{
    const response = await axios.post(`${backend}/blogs/`,{
      title:title,
      content:content
    })
    return response
    
    }
    catch(error){
      console.log(error);
      toast.error("OOps problem...")
      setIsError(true)
    }
  }

  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const [isError,setIsError] = useState(false)

  return (
   <>
   
   <Navbar/>
     <div>
     <div className=" bg-custom-bg  bg-cover bg-center flex ">
        <h1 className='text-5xl text-white font-bold p-[7%]'>Create your own blog...</h1>
      </div>

      <form className='flex flex-col p-10 mt=10 min-h-screen'>
        <label htmlFor='title' className='text-2xl'>Title</label>
        <input value={title} onChange={(e)=>{
          console.log(e.target.value)
          setTitle(e.target.value)
        }} type="text" id="title" className='px-6 py-2 border-2 border-black max-w-96 rounded mt-4'/>

        <label htmlFor='content' className='text-2xl'>Content</label>
        <textarea onChange={(e)=>{
          console.log(e.target.value)
          setContent(e.target.value)
        }} id="content" className='px-6 py-2 border-2 border-black max-w-[100] min-h-[350px] rounded mt-4'/>
        <Link to={"/Blog"}>
        <button onClick={()=>{
          
          const title = document.getElementById("title").value
          const content = document.getElementById("content").value

          if(title.length === 0 || content.length ===0)
            {
              toast("Please enter all the details.")
            }
          else {
            sendData(title,content)
            toast.success("Blog created successfully...")
          }
          console.log(title)
          console.log(content)
        }} type='button' className='px-3 py-2 max-w-fit rounded bg-blue-400 text-white font-semibold mt-3'>Submit</button>
        </Link>
      </form>

     </div>
     <ToastContainer/>
     <Footer/>
   </>
  )
}

export default BlogPost;
