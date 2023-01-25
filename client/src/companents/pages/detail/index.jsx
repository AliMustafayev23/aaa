import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom';
import "./index.scss"
const Detail = () => {
  const [course, setCourse] = useState([]);
 const {_id}=useParams()
 const navigate=useNavigate()
  useEffect(() => {
    axios(`http://localhost:8000/course/${_id}`).then(response=>{
      setCourse(response.data)
    })
  }, [])
  const delet=()=>{
    axios.delete(`http://localhost:8000/course/${_id}`)
    navigate("/")
  }
  return (
    <div className='detail'>
         <Helmet>
                <meta charSet="utf-8" />
                <title>{course.title}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <img src={course.image} alt="" />
      <div className="detailleft">
        <div className='user'>
          <img src={course.userimage} alt="" />
          <h3>{course.author}</h3>
        </div>
        <h1>{course.title}</h1>
          <h4>Price:${course.price}</h4>
          <p>{course.description}</p>
          <button className='delet' onClick={()=>delet()}>Delete</button>
      </div>
    </div>
  )
}

export default Detail