import React from 'react'
import "./index.scss"
const RegisterNow = () => {
  return (
    <div className='registernow'>
        <div className="registernowleft">
            <h1>Register now and get a discount</h1>
            <div className='registernowtext'><h1 className='faiz'>50%</h1> <h1>discount until 1 January</h1></div>
            <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor<br/> nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum.<br/> Aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempo.</p>
            <button className='register'>Register Now</button>
        </div>
    
        <div className="registernowright">
            <h1>Search for your course</h1>
            <input type="text" placeholder='Course Name'/>
            <input type="text" placeholder='Category'/>
            <input type="text" placeholder='Degree'/>
            <button className='searchbutton'>Search Course</button>
        </div>
    </div>
  )
}

export default RegisterNow