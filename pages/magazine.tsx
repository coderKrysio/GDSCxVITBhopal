
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Helmet } from "react-helmet";

export default function Magazine(){
    return(
        <div className="main--container">
            <Helmet>
                <title>GDSC x VITB | Magazine</title>
            </Helmet>
            <Navbar/>
            <Image className="bg--img light--mode" src={'/images/magazinebg.jpg'} width={2000} height={2000} alt="background"></Image>
            <Image className="bg--img dark--mode" src={'/images/magazinebg-dark.jpg'} width={2000} height={2000} alt="background"></Image>
            <span className="page--info">
                <h1 className="page--h1">Magazine</h1>
                <p>Welcome to the DSCzine magazine from the GDSC club! Our magazine is a collection of exciting content based on the activities and events that we have organized as a club. From highlights of our hackathons and coding workshops to interviews with our members and community outreach initiatives, we've got it all. So, grab a cup of coffee, find a cozy spot, and get ready to explore the diverse and engaging world of the GDSC club. Welcome to the DSCzine magazine!</p>
                <div className="magazine">
                    <h3>2021</h3>
                    <Image src={'/images/2021cover.webp'} alt="2021 Magazine" width={350} height={475}></Image>
                    <button className="page--btn " onClick={open}>Read Now</button>
                </div>
            </span>
            <Footer/>
        </div>
    )
}

const w = window.open("/pdf/DSCZINE2021.pdf", '_blank');
const open = () =>{
    w?.focus();
}