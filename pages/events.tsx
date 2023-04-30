
import EventBox from "@/components/Event-Box";
import FilterDiv from "@/components/FilterBox";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Helmet } from "react-helmet";

export default function Events(){
    return (
        <div className="main--container">
            <Helmet>
                <title>GDSC x VITB | Events</title>
            </Helmet>
            <Navbar/>
            <Image className="bg--img light--mode" src={'/images/eventbg.jpg'} width={2000} height={2000} alt="background"></Image>
            <Image className="bg--img dark--mode" src={'/images/eventbg-dark.jpg'} width={2000} height={2000} alt="background"></Image>
            <span className="page--info"> 
                <h1 className="page--h1">Events</h1>
                <p>Welcome to our club&#39;s events, where innovation meets community. Our events are not just about learning and networking, but also about fostering a culture of growth and collaboration. We believe that by sharing knowledge and experiences, we can all grow together and create a better future. So join us, as we explore the latest trends, exchange ideas, and work towards building a more inclusive and sustainable world.</p>
            </span>
            <FilterDiv/>
            <div className="events--holder">
                <EventBox/>
                <EventBox/>
                <EventBox/>
                <EventBox/>
                <EventBox/>
                <EventBox/>
            </div>
            <Footer/>
        </div>)
}