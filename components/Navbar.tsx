import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import SideMenu from "./Menu";

const Navbar = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const setDarkMode =() => {
        document.querySelector("body")!.setAttribute('data-theme','dark')
    }
    
    const setLightMode =() => {
        document.querySelector("body")!.setAttribute('data-theme','light') 
    }

    const toggleTheme = (e: any) => {
        if(e.target.checked) setDarkMode();
        else setLightMode();
    }

    return(
        <nav>
            <div className="logo">
                <Link href={'/'} onClick={()=>{router.push('/')}}>
                <img className="light--mode" src="/images/GDSC-logo.png" alt="GDSC Vit Bhopal University"></img>
                <img className="dark--mode" src={"/images/GDSC-logo-dark.png" } alt="GDSC Vit Bhopal University"></img>
                </Link>
            </div>
            <div className="navigation">
                <ul className="menu--links">
                    <Link className="menu" href={'/'}>Home</Link>
                    <Link className="menu" href={'/team'}>Team</Link>
                    <Link className="menu" href={'/events'}>Events</Link>
                    <Link className="menu" href={'/blog'}>Blog</Link>                    
                    <Link className="menu" href={'/about'}>About</Link>
                    <Link className="menu" href={'/contact-us'}>Contact Us</Link>
                </ul>
            </div>            
            <div className="toggle--btn">
                <form action="#">
                    <label className="switch">
                        <input type={'checkbox'} onChange={toggleTheme}></input>
                        <img className="moon light--mode" src="https://img.icons8.com/ios-glyphs/30/null/moon-symbol.png"/>
                        <img className="sun dark--mode" src="https://img.icons8.com/ios-glyphs/30/ffffff/sun--v1.png"/>
                    </label>
                </form>
            </div>

            <div className="nav--btn">
                <form action="#">
                    <label className="navigate">
                        <input type={'checkbox'} onChange={() => setIsOpen(true)}></input>
                        <img className="dot light--mode" src="https://img.icons8.com/ios-filled/50/null/menu-2.png" alt="menu"/>
                        <img className="dot dark--mode" src="https://img.icons8.com/ios-filled/50/ffffff/menu-2.png" alt="menu"/>
                    </label>
                </form>
            </div>
            {isOpen ? <SideMenu setIsOpen={setIsOpen}/> : null}
        </nav>
    )
}

export default Navbar

// const element = document.querySelector("body") as HTMLElement;

