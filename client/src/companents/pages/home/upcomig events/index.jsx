import React from 'react'
import "./index.scss"
const UpcomingEvents = () => {
  return (
    <div className='upcoming'>
        <div className="line"></div>
        <h1>Upcoming Events</h1>
        <div className="upcomingcards">
            <div className="upcomingcard">
                <div className='january'>
                <h1>07</h1>
                <h3>January</h3>
                </div>
                <div className="middle">
                    <h2>Student Festival</h2>
                    <h3>Grand Central Park</h3>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                </div>
                <img src="https://preview.colorlib.com/theme/course/images/event_1.jpg" alt="" />
            </div>
            <div className="upcomingcard">
                <div className='january'>
                <h1>07</h1>
                <h3>January</h3>
                </div>
                <div className="middle">
                    <h2>Open day in the Univesrsity campus</h2>
                    <h3>Grand Central Park</h3>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                </div>
                <img src="https://preview.colorlib.com/theme/course/images/event_2.jpg" alt="" />
            </div>
            <div className="upcomingcard">
                <div className='january'>
                <h1>07</h1>
                <h3>January</h3>
                </div>
                <div className="middle">
                    <h2>Student Graduation Ceremony</h2>
                    <h3>Grand Central Park</h3>
                    <p>In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor.</p>
                </div>
                <img src="https://preview.colorlib.com/theme/course/images/event_3.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default UpcomingEvents