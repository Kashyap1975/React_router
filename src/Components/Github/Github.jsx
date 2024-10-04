// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import { useLoaderData } from 'react-router-dom'

// function Github() {
// const data = useLoaderData()

// // const [data,setData] = useState([])

//     // useEffect(() => {
//     //  fetch('https://api.github.com/users/hiteshchoudhary')
//     // .then(Response => Response.json())
//     // .then(data =>{
//     //     console.log(data);
//     //     setData(data)
//     // })
//     // }, [])
    
//   return (
//     <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github follower :{data.followers}
//    <img src={data.avatar_url}  alt='Git picture'/>
    
//     </div>
//   )
// }

// export default Github


// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/Kashyap1975')
//     return response.json()
// }
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) setIsLoading(false);
  }, [data]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <h2>GitHub Followers: {data?.followers}</h2>
      <img 
        src={data?.avatar_url} 
        alt="GitHub Avatar" 
        className="rounded-full mx-auto my-4 w-32 h-32" 
      />
      <p className="text-xl">{data?.name}</p>
      <a 
        href={data?.html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-400 underline"
      >
        View GitHub Profile
      </a>
    </div>
  );
}

export default Github;


export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/Kashyap1975');
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return { followers: 0, avatar_url: '', name: 'N/A', html_url: '#' }; // Return fallback values
  }
};
