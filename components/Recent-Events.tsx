import { useRouter } from "next/router"

const RecentEvents = () => {
    const router = useRouter();
    return(
        <div className="components">
            <h1>Recent Events</h1>
            <div className="recent--evt">
                <div>
                    <div className="event--holder">
                        <span>
                            <img src={'/images/logo-design.svg'} alt="event-posters"></img>
                            <h3>Web Development</h3>
                            <p>For students to learn development skills, solve problems through technology and inspire them to be world class developers and changemakers.</p>
                        </span>                    
                    </div>
                    <span className="color--card yellow light--mode" style={{'--i':1,'--div-color':'#FFD64F'} as React.CSSProperties}></span>
                </div>

                <div>
                    <div className="event--holder" >
                        <span>
                            <img src={'/images/logo-design.svg'} alt="event-posters"></img>
                            <h3>Target Audience</h3>
                            <p>The DSC program is a grassroots channel through which Google provides development skills, mobile and web development skills for students, towards employability.</p>
                        </span> 
                    </div>
                    <span className="color--card green light--mode" style={{'--i':3.75,'--div-color':'#3AA959'} as React.CSSProperties}></span>
                </div>
                
                <div>
                    <div className="event--holder">
                        <span>
                            <img src={'/images/logo-design.svg'} alt="event-posters"></img>
                            <h3>ML Talks</h3>
                            <p>DSC activities are targeted at University students and any others including faculty members who want to learn development skills & work to solve real-life problems.</p>
                        </span>                    
                    </div>
                    <span className="color--card blue light--mode" style={{'--i':6.5,'--div-color':'#2C96FF'} as React.CSSProperties}></span>
                </div>
            </div>
            <button className="page--btn" onClick={()=>{router.push('/events')}}>Explore</button>
        </div>
    )
}

export default RecentEvents;