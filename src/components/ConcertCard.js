const ConcertCard = ({concert}) => {
    return ( <>
    <h2><b> {concert.artist}</b></h2>
    <p><b> Date:</b> {concert.date}</p>
    <p><b> Time:</b> {concert.time}</p>
    <p><b>Ticket Price:</b> £{concert.ticketPrice}</p>
    <p><b>Venue Capacity:</b> {concert.capacity}</p>
    <div>
        <p><b>Location:</b> London</p>
    </div>

    
    </> );
}
 
export default ConcertCard;