import React, { useEffect, useState } from 'react'
import ShowPost from './Pages/ShowPost'

function Layout() {
    const [postData,setPostData]=useState([])
    useEffect(()=>{
        async function fetchPostData(){
            try {
             const response=await fetch("https://jsonplaceholder.typicode.com/comments")
             const data=await response.json()
                setPostData(data)
             
            } catch (error) {
               console.log(error);
            }
         }
         fetchPostData()
    },[])
  return (
    <div>
        <ShowPost  data={postData}/>
    </div>
  )
}

export default Layout