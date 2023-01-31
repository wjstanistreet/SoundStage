import { useEffect, useState } from "react";

import ConcertContainer from "../containers/ConcertContainer";

const Concerts = () => {
    
    const [sortedConcerts, setSortedConcerts] = useState([]);

    const handleSort = (event) => {
        fetch(`http://localhost:8080/concerts/${event.target.value}`)
        .then((response) => {return response.json()})
        .then((data) => {setSortedConcerts(data)});
    }
        console.log(sortedConcerts)
    
    
    return (
        <div>
            <select onChange={handleSort}>
                <option disabled-value=""> -- Sort by -- </option>
                <option value="ticketPrices">Descending Ticket Price</option>


                <option value="capacities">Ascending Capacities</option>
            </select>

            <ConcertContainer></ConcertContainer>
        </div>
    );
}
 
export default Concerts;