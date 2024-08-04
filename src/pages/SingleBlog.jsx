import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from "axios"
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const backend = import.meta.env.VITE_BACKEND_URL

const SingleBlog = () => {


    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams();

    const [blog, setBlog] = useState({})

    const getBlogFromId = async (id)=>{
      const response = await axios.get(`${backend}/blogs/${id}`)
      console.log(response);
      setBlog(response.data)
      setIsLoading(false)
    }

    useEffect(()=>{
      getBlogFromId(id)
    },[])

    console.log(blog);

  return (
    <>
    <div>
      <Navbar/>
      <div className=" bg-custom-bg  bg-cover bg-center flex ">
        <h1 className='text-5xl text-white font-bold p-[7%]'>{blog.title}</h1>
      </div>
    <div className='bg-gray px-10 py-6 leading-12'>
        <Link to={"/Blog"} className="bg-black text-white p-3" >Back</Link>
        {
          isLoading?(
          <div className='text-2xl text-blue-300 text-center'>Data is Loading.....</div>
          ):(
          <>
          <h1 className='text-3xl my-5'>{blog.title}</h1>
          <p className='text-2xl'>{blog.content}</p>
          </>
        )}
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default SingleBlog