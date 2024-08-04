// import React from 'react'
// import { Link } from 'react-router-dom';

// export const Bcard = ({item}) => {
//     const {title,content,_id} = item;
//     console.log(title);
//   return (
//     <div className='bg-white m-5 p-5 rounded-sm '>
//         <h1 className='text-3xl py-4 px-2 '>{title}</h1>
//         <p className='text-2xl px-2' >{content.slice(0,100)}<Link to={`/Blog/Single-Blog/${_id}`} className='text-[#734ec9]' > Read more ......</Link></p>
//     </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';

export const Bcard = ({ item }) => {
  const { title, content, _id } = item;
  console.log('Bcard item:', item); // Log the item to verify data

  return (
    <div className='bg-white m-5 p-5 rounded-sm '>
      <h1 className='text-3xl py-4 px-2 '>{title}</h1>
      <p className='text-2xl px-2'>
        {content.slice(0, 100)}
        <Link to={`/Blog/Single-Blog/${_id}`} className='text-[#734ec9]'>
          Read more ......
        </Link>
      </p>
    </div>
  );
};
