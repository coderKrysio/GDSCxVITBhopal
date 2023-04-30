import Footer from "@/components/Footer";
import JoinCommunity from "@/components/Join-Community";
import Navbar from "@/components/Navbar";
import ReachUs from "@/components/ReachUs";
import Image from "next/image";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";

export default function ContactUs(){
    const router = useRouter();

    return (
        <div className="main--container">
            <Helmet>
                <title>GDSC x VITB | Contact</title>
            </Helmet>
            <Navbar/>
            <Image className="bg--img light--mode" src={'/images/contactbg.jpg'} width={2000} height={2000} alt="background"></Image>
            <Image className="bg--img dark--mode" src={'/images/contactbg-dark.jpg'} width={2000} height={2000} alt="background"></Image>
            <span className="page--info"> 
                <h1 className="page--h1">Contact Us</h1>
                <p>If you want to reach us, forget about sending a carrier pigeon or using smoke signals - we&#39;re not that old school. Instead, just shoot us an email, slide into our DMs, or drop a message in our Slack channel. And if all else fails, try shouting really loudly out your window - who knows, we might just hear you!</p>
                <div className="about--btns">
                    <button className="page--btn about--btn" onClick={() => router.push('/events')}>Explore Events</button>
                    <button className="page--btn about--btn" onClick={() => router.push('/blog')}>Our Blog</button>
                    <button className="page--btn about--btn" onClick={() => router.push('/magazine')}>DSCzine</button>                    
                </div>
            </span>
            <ReachUs/>
            <JoinCommunity/>
            <Footer/>
        </div>
    )
}