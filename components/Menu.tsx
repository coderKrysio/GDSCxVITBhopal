import Link from "next/link";

const SideMenu = ({setIsOpen}: any) => {
    return(
        <div className="menu--div">
            <button>
                <img className="cross light--mode" onClick={() => setIsOpen(false)} src="https://img.icons8.com/sf-black/64/null/multiply.png" alt="close"/>
                <img className="cross dark--mode" onClick={() => setIsOpen(false)} src="https://img.icons8.com/sf-black/64/ffffff/multiply.png" alt="close"/>
            </button>
            
            <ul className="menu--links">
                <Link className="menu" href={'/'}>Home</Link>
                <Link className="menu" href={'/team'}>Team</Link>
                <Link className="menu" href={'/events'}>Events</Link>
                <Link className="menu" href={'/blog'}>Blog</Link>                    
                <Link className="menu" href={'/about'}>About</Link>
                <Link className="menu" href={'/magazine'}>DSCzine</Link>
                <Link className="menu" href={'/contact-us'}>Contact Us</Link>
            </ul>
        </div> 
    )
}

export default SideMenu