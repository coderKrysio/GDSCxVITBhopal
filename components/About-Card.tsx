import Image from "next/image";

const AboutCards = () => {
    return(
        <div className="about--cards">
            <div className="about--card">
                <span>
                    <Image src={'/images/image 11.png'} width={44} height={44} alt="light"></Image>
                    <h3>Concepts</h3>
                    <p>The DSC program is a grassroots channel thought which Google provides development skills, mobile and web development skills for students, towards employability.</p>
                </span>
                
            </div>
            <div className="about--card">
                <span>
                    <Image src={'/images/image 12.png'} width={44} height={44} alt="arrow"></Image>
                    <h3>Why GDSC</h3>
                    <p>For students to learn development skills, solve problems throught technology and inspire them to be world classs developers and changemakers.</p>
                </span>
                
            </div>
            <div className="about--card">
                <span>
                    <Image src={'/images/image 13.png'} width={44} height={44} alt="check"></Image>
                    <h3>Target Audience</h3>
                    <p>DSC activities are targeted at University students and any others including faculty members who want to learn development skills and work to solve real-life problems.</p>
                </span>
                
            </div>
        </div>
    )
}

export default AboutCards