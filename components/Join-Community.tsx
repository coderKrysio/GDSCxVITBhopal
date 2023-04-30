const JoinCommunity = () => {
    const join = () => {
        window.open('https://gdsc.community.dev/accounts/login/?next=/vellore-institute-of-technology-vit-bhopal/', '_blank', 'noreferrer');
    }
    return(
        <div className="components">
            <div className="community--ele light--mode">
                <iframe src="https://embed.lottiefiles.com/animation/93063"></iframe>
            </div>

            <h1>Be part of the community</h1>

            <p>Visit our community page and RSVP to get notifications right in your inbox when we are live next.</p>

            <button onClick={()=>join()} className="page--btn ">JOIN US</button>

            <div className="dark--mode">
                <div className="cube--holder">    
                    <div className="one-square side">
                        <div className="box">
                            <div className="boxtop blue"></div>
                            <div>
                                <span className="blue" style={{'--i':0} as React.CSSProperties}></span>
                                <span className="blue" style={{'--i':1} as React.CSSProperties}></span>
                                <span className="blue" style={{'--i':2} as React.CSSProperties}></span>
                                <span className="blue" style={{'--i':3} as React.CSSProperties}></span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="one-square">
                        <div className="box">
                            <div className="boxtop"></div>
                            <div>
                                <span style={{'--i':0} as React.CSSProperties}></span>
                                <span style={{'--i':1} as React.CSSProperties}></span>
                                <span style={{'--i':2} as React.CSSProperties}></span>
                                <span style={{'--i':3} as React.CSSProperties}></span>
                            </div>
                        </div>
                    </div>
                
                    <div className="one-square">
                        <div className="box">
                            <div className="boxtop yellow"></div>
                            <div>
                                <span className="yellow" style={{'--i':0} as React.CSSProperties}></span>
                                <span className="yellow" style={{'--i':1} as React.CSSProperties}></span>
                                <span className="yellow" style={{'--i':2} as React.CSSProperties}></span>
                                <span className="yellow" style={{'--i':3} as React.CSSProperties}></span>
                            </div>
                        </div>
                    </div>
                
                    <div className="one-square side">
                        <div className="box">
                            <div className="boxtop red"></div>
                            <div>
                                <span className="red" style={{'--i':0} as React.CSSProperties}></span>
                                <span className="red" style={{'--i':1} as React.CSSProperties}></span>
                                <span className="red" style={{'--i':2} as React.CSSProperties}></span>
                                <span className="red" style={{'--i':3} as React.CSSProperties}></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinCommunity