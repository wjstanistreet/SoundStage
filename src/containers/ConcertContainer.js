import { useEffect, useState } from "react";
import ConcertCard from "../components/ConcertCard";
import ConcertList from "../components/ConcertList";

const ConcertContainer = () => {
    
    const [concerts, setConcerts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/concerts")
        .then((response) => {return response.json()})
        .then((data) => {setConcerts(data)});
    }, [])

    console.log(concerts)

    return ( 
        <ConcertList concerts={concerts}/>
    );
}
 
export default ConcertContainer;