const ConcertList = ({concerts}) => {
    
    const concertList = concerts.map((concert) => {
        return <p>{concert.artist}</p>    
    });
    
    return ( 
        <div>
            <p>{concertList}</p>
        </div> 
    );
}
 
export default ConcertList;