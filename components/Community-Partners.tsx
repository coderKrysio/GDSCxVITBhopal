import Image from "next/image";

const CommunityPartners = () => {
    return(
        <div className="components">
            <h1>Community Partners</h1>
            
            <div className="light--mode">
                <div className="ele--container">
                    <div className="perpetual--ele">
                        <div className="loader">
                            <div className="ball"></div>
                        </div>        
                    </div>
                </div>
            </div>

            <div className="partner--box">
                <div className="partner">
                    <Image className="image" src={'/images/wow-logo.jpeg'} alt="DSC WOW" width={150} height={100}title="DSC WOW" ></Image>
                    <h3>DSC WOW</h3>
                </div>
                <div className="partner">
                    <Image className="image" src={'/images/tcc-logo.png'} alt="The Coding Culture" width={150} height={100} title="The Coding Culture" ></Image>
                    <h3>The Coding Culture</h3>
                </div>
                <div className="partner">
                    <Image className="image" src={'/images/gmc-logo.jpeg'} alt="AIBlitz #7" width={150} height={100} title="AIBlitz #7" ></Image>
                    <h3>AIBlitz #7</h3>
                </div>
            </div>           
        </div>
    )
}

export default CommunityPartners