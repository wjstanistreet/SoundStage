const ConcertCard = ({concert}) => {
    return ( <>
    <h2><b>Artist: {concert.artist}</b></h2>
    <p><b>Concert Date: {concert.date}</b></p>
    <p><b>Concert Time: {concert.time}</b></p>
    <p><b>Ticket Price: £{concert.ticketPrice}</b></p>

    <div>
        <p>Location: London</p>
    </div>

    
    </> );
}
 
export default ConcertCard;