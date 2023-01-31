import { useEffect, useState } from "react";
import ConcertCard from "../components/ConcertCard";
import ConcertList from "../components/ConcertList";
import SearchBar from "../components/SearchBar";
import Concerts from "../pages/Concerts";

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
        <>
            <SearchBar setSearchInput={setSearchInput}/>
            <ConcertList concerts={concerts} searchInput={searchInput}/>

        </>
    );
}
 
export default ConcertContainer;