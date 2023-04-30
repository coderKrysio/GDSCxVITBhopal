import Link from "next/link";
import Image from "next/image";
import { Helmet } from "react-helmet";
import Footer from "@/components/Footer";
import MemberCard from "@/components/Member-Card";
import Navbar from "@/components/Navbar";
import TeamMemberInfo from "@/components/TeamMemberInfo";

export default function Teams(){
    return (
        <div className="main--container">
            <Helmet>
                <title>GDSC x VITB | Team</title>
            </Helmet>
            <Navbar/>
            <Image className="bg--img light--mode" src={'/images/teambg.jpg'} width={2000} height={2000} alt="background"></Image>
            <Image className="bg--img dark--mode" src={'/images/teambg-dark.jpg'} width={2000} height={2000} alt="background"></Image>
            <span className="page--info"> 
                <h1 className="page--h1">The Team</h1>
                <p>Meet the GDS-Club team - a group of brainy tech geeks who eat, sleep, and breathe code! They&#39;re like the Avengers of the tech world, but instead of fighting aliens and supervillains, they&#39;re battling bugs and writing elegant algorithms. They may not have capes or superpowers, but they&#39;ve got something even better - an insatiable curiosity and a love for all things tech. So don&#39;t mess with them, unless you want to end up on the wrong side of a coding duel!</p>
            </span>
            <div className="team--year">
                <ul>
                    <Link className="year--links" href={'/team'}>2022</Link>
                    {/* <span className="year--links"> | </span>
                    <Link className="year--links" href={'/team'}>2021</Link>
                    <span className="year--links"> | </span>
                    <Link className="year--links" href={'/team'}>2020</Link> */}
                </ul>
            </div>
            {/* <ProfileCard/> */}
            <div className="team--members">
                <h1>GDSC Lead</h1>
                <MemberCard/>
                <hr/>
                <h1>Core Team</h1>
                <TeamMemberInfo/>
                <TeamMemberInfo/>
                <TeamMemberInfo/>
                <hr/>
                <h1>Web Team</h1>
                <TeamMemberInfo/>
                <hr/>
                <h1>Android Team</h1>
                <TeamMemberInfo/>
                <hr/>
                <h1>Blockchain Team</h1>
                <TeamMemberInfo/>
                <hr/>
                <h1>AI & ML Team</h1>
                <TeamMemberInfo/>
                <hr/>
                <h1>Design Team</h1>
                <TeamMemberInfo/>
                <hr/>
                <h1>Event Management Team</h1>
                <TeamMemberInfo/>
                <hr/>
                <h1>Women TechMakers Team</h1>
                <TeamMemberInfo/>
            </div>            
            <Footer/>
        </div>
    )
}