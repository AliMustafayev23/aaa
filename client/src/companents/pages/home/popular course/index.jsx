import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./index.scss"
const PopularCourse = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
      axios("http://localhost:8000/course").then(response=>{
        setCourse(response.data)
      })
    }, [])
    const search=(value)=>{
        axios("http://localhost:8000/course").then(response=>{
            let searched=response.data.filter((e)=>e.title.toLowerCase().includes(value.toLowerCase()))
        setCourse(searched)
      })
    }
    const normal=()=>{
      axios("http://localhost:8000/course").then(response=>{
        setCourse(response.data)
      })
    }
    
    const sort=()=>{
     axios("http://localhost:8000/course").then(response=>{
          let sorted=response.data.sort((a,b)=>a.price-b.price)
      setCourse(sorted)
    })
    
  }
  return (
    <div className='popularcourse'>
        <div className='line'></div>
       <h1>Popular Course</h1> 
       <div className='buttons'>
        <div className="search">
            <input type="text" onChange={(e)=>search(e.target.value)}/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <button className='sort' onClick={()=>sort()}>sort</button>
        <button className='sort' onClick={()=>normal()}>Normal</button>
       </div>
       <div className="courses">
{course.map((e)=>{return(<Link to={`/${e._id}`} className='course'>
<img className='courseimage' src={e.image} alt="" />
<h2>{e.title}</h2>
<i>{e.description}</i>
<div className='coursedown'>
    <img  src={e.userimage} alt="" />
    <p><b>{e.author}</b></p>
    <p className='price'>${e.price}</p>
</div>
</Link>)})}
       </div>
        </div>
  )
}

export default PopularCourse