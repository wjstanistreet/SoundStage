import { useEffect, useState } from "react";
import ConcertCard from "../components/ConcertCard";
import ConcertList from "../components/ConcertList";
import SearchBar from "../components/SearchBar";
import Concerts from "../pages/Concerts";
import HowItWorks from "../pages/HowItWorks";

const ConcertContainer = ({sortedConcerts}) => {
    
    const [concerts, setConcerts] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/concerts")
        .then((response) => {return response.json()})
        .then((data) => {setConcerts(data)});
    }, [])

        
    console.log(sortedConcerts)

    return ( 
        <div>
            <SearchBar setSearchInput={setSearchInput}/>
            <div className="concertList">           
                 <ConcertList concerts={sortedConcerts === undefined? concerts : sortedConcerts} searchInput={searchInput}/>
            </div>

        </div>
    );
}
 
export default ConcertContainer;