
import AboutCards from "@/components/About-Card";
import CommunityPartners from "@/components/Community-Partners";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sponsor from "@/components/Sponsors";
import Image from "next/image";
import { useRouter } from "next/router";
import { Helmet } from "react-helmet";

export default function About(){
    const router = useRouter();

    return (
        <div className="main--container about">
            <Helmet>
                <title>GDSC x VITB | About</title>
            </Helmet>
            <Navbar/>
            <Image className="bg--img light--mode" src={'/images/aboutbg.jpg'} width={2000} height={2000} alt="background"></Image>
            <Image className="bg--img dark--mode" src={'/images/aboutbg-dark.jpg'} width={2000} height={2000} alt="background"></Image>
            <span className="page--info">
                <h1 className="page--h1">About Us</h1>
                <p>Developer Student Clubs is an initiative of Google Developers.<br></br><br></br>
                Google collaborates with DSC Leads once a year who are pursuing an undergraduate or graduate university degree and supports them as they start and grow their on-campus community. DSC activities are targeted at University students and others including faculty members who want to learn development skills & work to solve real-life problems.<br></br><br></br>
                We at DSC — VIT Bhopal look forward to form a community where we are able to convert our knowledge into real time application, help each student to develop in different fields of technology and make use of our knowledge to build something that helps local businesses around us as well as their community.</p>
                <button className="page--btn about--btn" onClick={() => router.push('/magazine')}>Read our DSCzine</button>
            </span>            
            <AboutCards/>
            <CommunityPartners/>
            <Sponsor/>
            <Footer/>
        </div>)
}