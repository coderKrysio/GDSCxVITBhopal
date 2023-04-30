import Image from "next/image";
import Link from "next/link";

const ReachUs = () => {
    return(
        <div className="components">
            <h1>Reach Us</h1>
            <div className="social--links">
                <Link className="links" target={'_blank'} href={'https://www.instagram.com/gdscvitbhopal/'}><Image src={'/images/Instagram.svg'} width={50} height={50} alt="social-icon"></Image></Link>
                <Link className="links" target={'_blank'} href={'https://discord.gg/PB3TdP99zt'}><Image src={'/images/Discord.svg'} width={50} height={50} alt="social-icon"></Image></Link>
                <Link className="links" target={'_blank'} href={'https://www.youtube.com/channel/UCVr5tPwyUH8rJd5yEhBd94w'}><Image src={'/images/Youtube.svg'} width={50} height={50} alt="social-icon"></Image></Link>
                <Link className="links" target={'_blank'} href={'https://www.linkedin.com/company/gdscvitbhopal'}><Image src={'/images/Linkedin.svg'} width={50} height={50} alt="social-icon"></Image></Link>
                <Link className="links" target={'_blank'} href={'https://medium.com/dsc-vit-bhopal'}><Image src={'/images/Medium.svg'} width={50} height={50} alt="social-icon"></Image></Link>
                <Link className="links" target={'_blank'} href={'https://github.com/DSCVITBHOPAL'}><Image src={'/images/Github.svg'} width={50} height={50} alt="social-icon"></Image></Link>
                <Link className="links" target={'_blank'} href={'https://www.facebook.com/gdscvitbhopal'}><Image src={'/images/Facebook.svg'} width={50} height={50} alt="social-icon"></Image></Link>
                <Link className="links" target={'_blank'} href={'https://chat.whatsapp.com/D2ezrRRITlvKtuMEat9KpA'}><Image src={'/images/Whatsapp.svg'} width={50} height={50} alt="social-icon"></Image></Link>
                <Link className="links" target={'_blank'} href={'https://twitter.com/gdscvitbhopal'}><Image src={'/images/Twitter.svg'} width={50} height={50} alt="social-icon"></Image></Link>
            </div>
        </div>
    )
}

export default ReachUs