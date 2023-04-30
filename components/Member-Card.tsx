import { useState } from "react"
import Image from "next/image";
import ProfileCard from "./Profile-Card";

const MemberCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
            <div className="member--card">
                <div onClick={() => setIsOpen(true)}>
                    <Image src="/images/logo-design.svg" width={10} height={10} alt="profile-photo"></Image>
                </div>
                <h2>Name</h2>
                <span>Position</span>
            </div>
            {isOpen && <ProfileCard setIsOpen={setIsOpen}/>}
        </>
        
    )
}

export default MemberCard