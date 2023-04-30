import { useRouter } from "next/router";
import AboutCards from "./About-Card";

const About = () => {
    const router = useRouter();

    return (
        <section className="components">
            <div className="about--cmp">
                <div className="about--ele light--mode">
                    <iframe src="https://embed.lottiefiles.com/animation/93433"></iframe>
                </div>
                <h1>About Us</h1> 
                <AboutCards/>
                <div className="about--btns">
                    <button className="page--btn about--btn" onClick={() => router.push('/about')}>More</button>
                </div>
            </div>
        </section>)
}

export default About