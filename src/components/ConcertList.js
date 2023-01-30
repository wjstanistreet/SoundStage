import ConcertCard from "./ConcertCard";

const ConcertList = ({concerts}) => {
    
    const concertList = concerts.map((concert) => {
        return(
            <ConcertCard key={concert.id}
                         concert={concert}/>
        ) 
        
    });
    
    return ( 
        <div>
            <p>{concertList}</p>
        </div> 
    );
}
 
export default ConcertList;