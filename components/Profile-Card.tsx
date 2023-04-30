import Link from "next/link";

const ProfileCard = ({ setIsOpen }: any) => {
    return(
        <div className="modalbg" onClick={() => setIsOpen(false)}>
            <div className="centered">
                <div className="modal">
                    <div className="img--board">
                        <button onClick={() => setIsOpen(false)}><img src="https://img.icons8.com/sf-black/64/null/multiply.png" width={10} height={10} alt="cross"></img></button>
                        <img className="profile--bg" src="/images/eventbg.jpg" alt="profilebg"></img>
                        <img className="profile--img" src="/images/logo-design.svg" alt="profilebg"></img>
                    </div>            
                    <h2>Name</h2>
                    <span>team position</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="profile--links">
                        <Link href={'/'}>
                            <img src="https://img.icons8.com/ios-glyphs/30/null/github.png" className="light--mode" alt="GitHub" width={10} height={10}></img>
                            <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png" className="dark--mode" alt="GitHub" width={10} height={10}></img>
                        </Link>
                        <Link href={'/'}>
                            <img src="https://img.icons8.com/ios-filled/50/null/linkedin-2--v1.png" className="light--mode" alt="LinkedIn" width={10} height={10}></img>
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin-2--v1.png" className="dark--mode" alt="LinkedIn" width={10} height={10}></img>
                        </Link>
                        <Link href={'/'}>
                            <img src="https://img.icons8.com/material-sharp/48/null/twitter.png" className="light--mode" alt="Twitter" width={10} height={10}></img>
                            <img src="https://img.icons8.com/material-sharp/48/ffffff/twitter.png" className="dark--mode" alt="Twitter" width={10} height={10}></img>
                        </Link>
        
                    </div>  
                </div>
            </div>          
        </div>
    )
}

export default ProfileCard