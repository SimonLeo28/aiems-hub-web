import React, { useState , useEffect } from  'react'
import axios from 'axios'
import { Bcard } from '../components/Bcard'
import { Link } from 'react-router-dom'

const backend = import.meta.env.VITE_BACKEND_URL


const BlogDisplay = () => {

  console.log(backend);
  

    const [data, setData] = useState([])
  
    const [isLoading, setIsLoading] = useState(true)
  
    // async function getData()
    // {
    // 
    // }
  
    const getData = async ()=>{
      const response = await axios.get(`${backend}/blogs`)
      console.log("**********************")
      console.log(response);
      console.log("**********************")
      setData(response.data)
      setIsLoading(false);
    }
  
    useEffect(()=>{
      getData()
    },[])
  
  
    
    return (
      <>
      <div>
          <div className='bg-gray-300 p-5 text-black' >
              <h1 className='text-3xl'>Blogs</h1>
              {
                isLoading?
                <div>Loading data from backend....</div>
                :
                <div className='p-3'>
                  {data.map((item)=>{
                      return <Bcard key={item.key} item={item}  />
                  })}
              </div>
              }
          </div>
          <div className='flex-col p-5'>
                <h1 className='text-2xl p-3'><center>Want to display  your research in this page...</center></h1>
                <Link to={"/Blog/Create-Blog"}><center>
                  <button className='p-3 border-2 border-black-500 rounded-[10%] bg-white text-black'>Click Here</button>
                </center></Link>
              </div>
      </div>
      </>
    )
  }
  
  export default BlogDisplay
