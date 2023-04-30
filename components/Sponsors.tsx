import Image from "next/image";

const Sponsor = () => {
    return(
        <div className="components">
            <h1>Our Sponsors</h1>
            <div className="sponsor--box">
                <div className="sponsor">
                    <Image className="image" src={'/images/cn-logo.jpg'} alt="Coding Ninjas" width={150} height={100}  title="Coding Ninjas" ></Image>
                    <h3>Coding Ninjas</h3>
                </div>
                <div className="sponsor">
                    <Image className="image" src={'/images/sy-logo.jpg'} alt="Stream Yard" width={150} height={100} title="Stream Yard" ></Image>
                    <h3>Stream Yard</h3>
                </div>
                <div className="sponsor">
                    <Image className="image" src={'/images/gmc-logo.jpeg'} alt="GiveMyCertificate" width={150} height={100} title="GiveMyCertificate" ></Image>
                    <h3>GiveMyCertificate</h3>
                </div>
            </div>
        </div>
    )
}

export default Sponsor