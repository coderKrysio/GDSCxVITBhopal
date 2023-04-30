import { useRouter } from "next/router"

export default function Team(){
    const router = useRouter()
    return(
        <div className="components">
            <h1>Meet the Team</h1>
            <p>
                Get to know the people behind the scences.
                <br></br>
                The driving force of this community.
            </p>
            <button className="page--btn" onClick={()=>{router.push('/team')}}>The Team</button>
            <div className="team--svg light--mode">
                <iframe src="https://embed.lottiefiles.com/animation/73503"></iframe>
            </div>

            <div className="neon--rain dark--mode">
                <iframe src="https://embed.lottiefiles.com/animation/115189"></iframe>         
            </div>

            <div className="neon--rain2 dark--mode">
                <iframe src="https://embed.lottiefiles.com/animation/115189"></iframe>
            </div>
        </div>
    )
}