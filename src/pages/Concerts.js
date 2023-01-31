import { useEffect, useState } from "react";

import ConcertContainer from "../containers/ConcertContainer";

const Concerts = () => {
    
    const [sortedConcerts, setSortedConcerts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/concerts`)
        .then((response) => {return response.json()})
        .then((data) => {setSortedConcerts(data)})
    }, [])

    const handleSort = (event) => {
        return(
        fetch(`http://localhost:8080/concerts/${event.target.value}`)
        .then((response) => {return response.json()})
        .then((data) => {setSortedConcerts(data)})
    )};

    return (
        
        <div > 
        <div>
        <h1 className="concertHeader">Concerts</h1>
        </div>          
            <label >Sort by: </label>  
            <select onChange={handleSort} >
                <option value="">All Concerts </option>
                <option value="ticketPrices">Descending Ticket Price</option>
                <option value="capacities">Ascending Capacities</option>
                <option value="ticketPrices/over150">Luxury Concerts</option>
            </select>

            <ConcertContainer sortedConcerts={sortedConcerts}/>
        </div>
    );
}
 
export default Concerts;