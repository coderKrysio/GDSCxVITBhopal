import { useState } from "react"
import Image from "next/image";
import EventCard from "./Event-Card";

const EventBox = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className="event--box" onClick={() => setIsOpen(true)}>
                <div>
                    <Image src="/images/logo-design.svg" width={10} height={10} alt="event-poster"></Image>
                </div>
                <h3>Event Name</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {isOpen && <EventCard setIsOpen={setIsOpen}/>}
        </>
        
    )
}

export default EventBox