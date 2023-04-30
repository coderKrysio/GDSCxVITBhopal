import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <footer>
            <Image className="light--mode" src={'/images/GDSC-logo.png'} alt="GDSC Logo" title="DSC Vit Bhopal University" width={300} height={150}></Image>
            <Image className="dark--mode" src={'/images/logo-dark.png'} alt="GDSC Logo" title="DSC Vit Bhopal University" width={300} height={150}></Image>
            <div>
                <ul>
                    <span>Connect with Us</span>
                    <Link className="footer--links" target={'_blank'} href={'https://www.instagram.com/gdscvitbhopal/'}>Instagram</Link>
                    <Link className="footer--links" target={'_blank'} href={'https://discord.gg/PB3TdP99zt'}>Discord</Link>
                    <Link className="footer--links" target={'_blank'} href={'https://www.youtube.com/channel/UCVr5tPwyUH8rJd5yEhBd94w'}>Youtube</Link>
                    <Link className="footer--links" target={'_blank'} href={'https://www.linkedin.com/company/gdscvitbhopal'}>LinkedIn</Link>
                    <Link className="footer--links" target={'_blank'} href={'https://medium.com/dsc-vit-bhopal'}>Medium</Link>
                    <Link className="footer--links" target={'_blank'} href={'https://github.com/DSCVITBHOPAL'}>GitHub</Link>
                    <Link className="footer--links" target={'_blank'} href={'https://www.facebook.com/gdscvitbhopal'}>Facebook</Link>
                    <Link className="footer--links" target={'_blank'} href={'https://chat.whatsapp.com/D2ezrRRITlvKtuMEat9KpA'}>WhatsApp</Link>
                    <Link className="footer--links" target={'_blank'} href={'https://twitter.com/gdscvitbhopal'}>Twitter</Link>
                </ul>

                <ul>
                    <span>Links</span>
                    <Link className="footer--links" href={'/team'}>Team</Link>
                    <Link className="footer--links" href={'/events'}>Events</Link>
                    <Link className="footer--links" href={'/blog'}>Blog</Link>                    
                    <Link className="footer--links" href={'/magazine'}>DSCzine</Link>
                    <Link className="footer--links" href={'https://gdsc.community.dev/accounts/login/?next=/vellore-institute-of-technology-vit-bhopal/'} target="_blank">Join our Community</Link>
                    <Link className="footer--links" href={'/about'}>About</Link>
                </ul>

                <ul>
                    <span>Community Partners</span>
                    <Link className="footer--links" href={'/'}>DSC WOW</Link>
                    <Link className="footer--links" href={'/'}>The Coding Culture</Link>
                    <Link className="footer--links" href={'/'}>AlBlitz #7</Link>
                    
                </ul>

                <ul>
                    <span>Our Sponsors</span>
                    <Link className="footer--links" href={'/'}>Coding Ninjas</Link>
                    <Link className="footer--links" href={'/'}>Stream Yard</Link>
                    <Link className="footer--links" href={'/'}>GiveMyCertificate</Link>
                </ul>
            </div>
            <p>Made by GDSC X VIT Bhopal University Web Team</p>            
        </footer>
    )
}

export default Footer