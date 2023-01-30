const ConcertCard = ({concert}) => {
    return ( <>
    <h2><b>Artist: {concert.artist}</b></h2>
    <p><b>Concert Date:</b> {concert.date}</p>
    <p><b>Concert Time:</b> {concert.time}</p>
    <p><b>Ticket Price:</b> £{concert.ticketPrice}</p>

    <div>
        <p><b>Location:</b> London</p>
    </div>

    
    </> );
}
 
export default ConcertCard;