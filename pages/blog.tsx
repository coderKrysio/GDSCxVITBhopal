
import EventBox from "@/components/Event-Box";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Helmet } from "react-helmet";

export default function Blog(){
    return (
        <div className="main--container">
            <Helmet>
                <title>GDSC x VITB | Blog</title>
            </Helmet>
            <Navbar/>
            <Image className="bg--img light--mode" src={"/images/blogbg.jpg"} width={2000} height={2000} alt="background"></Image>
            <Image className="bg--img dark--mode" src={"/images/blogbg-dark.jpg"} width={2000} height={2000} alt="background"></Image>
            <span className="page--info"> 
                <h1 className="page--h1">Blog</h1>
                <p>Reading our club&#39;s blogs is like discovering a secret treasure trove of nerdy knowledge and witty humor. It&#39;s like finding a hidden door behind a bookshelf that leads to a magical world of tech insights and programming puns. So sit back, relax, and get ready to have your mind blown - or at least mildly entertained - by our brilliant bloggers and their never-ending stream of tech talk and pop culture references.</p>
            </span>
            <div className="events--holder">
                <EventBox/>
                <EventBox/>
                <EventBox/>
                <EventBox/>
                <EventBox/>
                <EventBox/>
            </div>
            <Footer/>
        </div>
    )
}