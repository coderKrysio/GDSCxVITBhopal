const EventCard = ({ setIsOpen }: any) => {
    return(
        <div className="modalbg" onClick={() => setIsOpen(false)}>
            <div className="centered">
                <div className="modal event--modal">
                    <div className="close--btn">
                        <button className="light--mode" onClick={() => setIsOpen(false)}><img src="https://img.icons8.com/sf-black/64/null/multiply.png"/></button>
                        <button className="dark--mode" onClick={() => setIsOpen(false)}><img src="https://img.icons8.com/sf-black/64/ffffff/multiply.png"/></button>
                    </div>

                    <div className="event--info">
                        <div className="poster"><img src="/images/logo-design.svg" alt="event-poster"></img></div>
                        <div className="info">
                            <h3>Event Name</h3>
                            <p>Tag Line</p>
                            <p>Date - Time: 26th feb 7:00pm</p>
                            <p>Venue: online</p>
                            <p>Organizer Team: Web Team</p>
                            <p>Schedule</p>
                            <p>-Day 1</p>
                            <p>-Day 2</p>
                        </div>
                    </div>

                    <div className="event--details">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    </div>
                </div>
            </div>          
        </div>
    )
}

export default EventCard