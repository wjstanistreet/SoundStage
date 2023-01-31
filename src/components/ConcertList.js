import ConcertCard from "./ConcertCard";
import '../assets/style.css'; 

const ConcertList = ({concerts, searchInput}) => {

    const concertList = concerts.map((concert) => {
        return(
            <ConcertCard key={concert.id}
                         concert={concert}/>
        )  
    });

    const filteredConcertList = concerts.filter((concert) => {
        return concert.artist.toLowerCase().includes(searchInput.toLowerCase());
    }).map((concert) => {
        return(
            <ConcertCard key={concert.id}
                         concert={concert}/>
        )});

    return ( 
        <div className="concertList">
            {searchInput === ''? concertList : filteredConcertList.length === 0 ? "Sorry, no concert found" : filteredConcertList}
        </div> 
    );
}

export default ConcertList;