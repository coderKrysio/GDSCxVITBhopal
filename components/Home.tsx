import Image from "next/image";

export default function Home(){
    return(
        <section>        
            <div className="light--mode">
                <div className="homepage--ele">
                    <iframe src="https://embed.lottiefiles.com/animation/120582"></iframe>
                </div>
            </div>
            

            <div className="dark--mode">
                <div className="sq--anime">
                    <div className="home--anime">
                        <div className="abox" style={{"--i":1} as React.CSSProperties}></div>
                        <div className="abox" style={{"--i":2} as React.CSSProperties}></div>
                        <div className="abox" style={{"--i":3} as React.CSSProperties}></div>
                        <div className="abox" style={{"--i":4} as React.CSSProperties}></div>
                    </div>
                </div>                
            </div>
            

            <div className="homepage--txt">
                <Image className="logo--des light--mode" src={'/images/logo-design.svg'} width={100} height={100} alt="logo"></Image>
                <Image className="logo--des dark--mode" src={'/images/logo-design-dark.svg'} width={100} height={100} alt="logo"></Image>
                <h1>Google Developer Student Club</h1>
                <h3>VIT Bhopal University</h3>
            </div>
      </section>
    )
}